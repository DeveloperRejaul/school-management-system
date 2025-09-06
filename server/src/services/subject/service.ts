import {Injectable } from '@nestjs/common';
import { Subject } from './schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject) private readonly model: typeof Subject
  ) { }
}