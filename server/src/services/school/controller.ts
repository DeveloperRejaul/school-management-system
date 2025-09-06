import { Body, Controller, Get, Param,Post,} from '@nestjs/common';
import { SchoolService } from './service';
import { CreateSchoolDto, CreateSchoolWithFileDto } from './dto';
import { IFileType } from 'src/types';
import { FileUpload, UploadedFile } from 'src/decorators/file-upload';
import { ApiOperation, ApiParam } from '@nestjs/swagger';



@Controller('/api/school')
export class SchoolController  {
  constructor(private readonly service: SchoolService) {}

  @Post()
  @FileUpload({ dto: CreateSchoolWithFileDto })
  create(@UploadedFile() file:IFileType, @Body() dto: CreateSchoolDto) {
    return this.service.create(file, dto);
  }


  @Get(':name')
  @ApiOperation({ summary: 'Get school by name' })
  @ApiParam({
    name: 'name',
    type: String,
    description: 'The unique school name to search for',
    example: 'Oxford',
  })
  get (@Param() {name}) {
    return this.service.getByName(name);
  }


}