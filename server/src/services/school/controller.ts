import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SchoolService } from './service';
import { CreateSchoolDto } from './dto';

@Controller('/api/school')
export class SchoolController {
  constructor(private readonly service: SchoolService) { }

  @Post()
  create (@Body() body: CreateSchoolDto) {
    return this.service.create(body);
  }
  @Get(':id')
  get (@Param() {id}) {
    return this.service.getByName(id);
  }
}