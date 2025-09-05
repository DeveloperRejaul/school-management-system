import {Body, Controller, FileTypeValidator,  ParseFilePipe, Post,  UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './service';
import { FileInterceptor } from '@nestjs/platform-express';
import { IFileType } from 'src/types';
import { CreateUserDto, CreateUserWithFileDto, LoginUserDto } from './dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { User } from './schema';


@ApiTags('user')
@Controller('/api/user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file',{limits:{fileSize: 512 * 1024} /* 512 KB */}))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateUserWithFileDto })
  create(@UploadedFile( new ParseFilePipe({ validators: [new FileTypeValidator({ fileType: /(png|jpg|jpeg|webp)$/i })]})) file:IFileType, @Body() dto: CreateUserDto):Promise<User> {
    return this.service.create(file, dto);
  }

  @Post('/login')
  login(@Body() body:LoginUserDto) {
    return this.service.login(body);
  }


}