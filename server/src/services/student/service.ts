import {Injectable } from '@nestjs/common';
import { Student } from './schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student) private readonly model: typeof Student
  ) { }

}