import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './schema';
import { InjectModel } from '@nestjs/sequelize';
import { IFileType } from 'src/types';
import { School } from '../school/schema';
import { saveFile } from 'src/utils/file';
import { CreateUserDto, LoginUserDto } from './dto';
import {hash,compare} from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly model: typeof User,
    private jwtService: JwtService
  ) { }
  
  async create (file:IFileType, body:CreateUserDto) {
    if(file) {
      body['avatar'] = await saveFile(file);
    }
    const {schoolIds, ...dto} = body || {};

    // hash password
    dto.password = await hash(dto.password, 10);
    const user = await this.model.create(dto);


    if (schoolIds?.length) {
      await user.$set('schools', schoolIds);
    }

    const result = await this.model.findByPk(user.id, { include: [School] });

    if(!result) {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return result;
  }

  async logout (res: Response) {
    res.clearCookie(process.env.COOKIE_KEY! || '', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      expires: new Date(Date.now())
    });
    return res.send({message:'Logout successful'});
  }


  async login(body:LoginUserDto, res: Response) {
    const user = await this.model.findOne({  where :{email: body.email}, include:[{model:School}]});

    if (!user) throw new HttpException('Email or password is  invalid', HttpStatus.BAD_REQUEST);

    const isValid = await compare(body.password, user.password);
    if (!isValid) throw new HttpException('Email or password is  invalid', HttpStatus.BAD_REQUEST);

    // create jwt token
    const token = this.jwtService.sign({
      email: user.email,
      id: user.id,
      role: user.role,
      schools: user.schools,
    }, {expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) * 24 * 365  /*1 year */});

    // if(body.remember) {
    res.cookie(process.env.COOKIE_KEY!, token);
    // }
    return res.send({ ...user.toJSON(),token});
  }
}