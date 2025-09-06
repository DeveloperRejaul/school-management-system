import { Module } from '@nestjs/common';
import { ClassController } from './controller';
import { ClassService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Class } from './schema';


@Module({
  imports: [
    SequelizeModule.forFeature([Class])
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClasssModule { }