import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { School } from './services/school/schema';
import { SchoolModule } from './services/school/module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST ,
      port:Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database:  process.env.PG_NAME,
      synchronize: true,
      autoLoadModels: true,
      models: [
        School
      ],
    }),
    SchoolModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
