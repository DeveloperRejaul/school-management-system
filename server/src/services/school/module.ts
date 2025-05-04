import { Module } from '@nestjs/common';
import { SchoolController } from './controller';
import { SchoolService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { School } from './schema';


@Module({
  imports: [
    SequelizeModule.forFeature([School])
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule { }