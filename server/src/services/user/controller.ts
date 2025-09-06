import {Body, Controller, Post,  } from '@nestjs/common';
import { UserService } from './service';
import { IFileType } from 'src/types';
import { CreateUserDto, CreateUserWithFileDto, LoginUserDto } from './dto';
import {  ApiTags } from '@nestjs/swagger';
import { FileUpload, UploadedFile } from 'src/decorators/file-upload';


@ApiTags('user')
@Controller('/api/user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Post()
  @FileUpload({dto: CreateUserWithFileDto})
  create(@UploadedFile () file:IFileType, @Body() dto: CreateUserDto){
    return this.service.create(file, dto);
  }

  @Post('/login')
  login(@Body() body:LoginUserDto) {
    return this.service.login(body);
  }

}