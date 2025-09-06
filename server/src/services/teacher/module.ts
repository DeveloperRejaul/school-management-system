import { Module } from '@nestjs/common';
import { TeacherController } from './controller';
import { TeacherService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './schema';


@Module({
  imports: [
    SequelizeModule.forFeature([Teacher])
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule { }