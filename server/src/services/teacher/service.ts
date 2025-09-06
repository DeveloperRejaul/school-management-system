import { Injectable } from '@nestjs/common';
import { Teacher } from './schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher) private readonly model: typeof Teacher
  ) { }

}