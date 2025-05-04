import { Body, Controller, Post } from '@nestjs/common';
import { SchoolService } from './service';
import { CreateSchoolDto } from './dto';

@Controller('api/v1/school')
export class SchoolController {
  constructor(private readonly service: SchoolService) { }

  @Post()
  create (@Body() body: CreateSchoolDto) {
    return this.service.create(body);
  }
}