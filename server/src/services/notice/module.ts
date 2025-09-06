import { Module } from '@nestjs/common';
import { NoticeController } from './controller';
import { NoticeService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notice } from './schema';


@Module({
  imports: [
    SequelizeModule.forFeature([Notice])
  ],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class NoticeModule { }