import { Injectable } from '@nestjs/common';
import { School } from './schema';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSchoolDto } from './dto';

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel(School) private readonly model: typeof School
  ) { }
  async create (body) {
   return this.model.create({...body});
  }
}