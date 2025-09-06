import { Module } from '@nestjs/common';
import { StudentController } from './controller';
import { StudentService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './schema';


@Module({
  imports: [
    SequelizeModule.forFeature([Student])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule { }