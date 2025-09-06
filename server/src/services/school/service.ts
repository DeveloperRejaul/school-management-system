import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { School } from './schema';
import { InjectModel } from '@nestjs/sequelize';
import { saveFile } from 'src/utils/file';
import { IFileType } from 'src/types';

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel(School) private readonly model: typeof School
  ) { }
  async create (file:IFileType, body) {
    if(file){
      body['avatar'] = await saveFile(file);
    }
    return this.model.create({...body});
  }


  async getByName(name:string){
    const school = await this.model.findOne({where:{name}});
    if(!school) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return school;
  }
}