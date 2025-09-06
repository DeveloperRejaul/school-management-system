import { Injectable } from '@nestjs/common';
import { Class } from './schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class) private readonly model: typeof Class
  ) { }

}