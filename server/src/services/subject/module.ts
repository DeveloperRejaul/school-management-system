import { Module } from '@nestjs/common';
import { SubjectController } from './controller';
import { SubjectService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subject } from './schema';


@Module({
  imports: [
    SequelizeModule.forFeature([Subject])
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule { }