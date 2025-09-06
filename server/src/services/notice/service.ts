import { Injectable } from '@nestjs/common';
import { Notice } from './schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NoticeService {
  constructor(
    @InjectModel(Notice) private readonly model: typeof Notice
  ) { }

}