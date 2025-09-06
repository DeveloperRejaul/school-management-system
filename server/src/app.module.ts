import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { School } from './services/school/schema';
import { SchoolModule } from './services/school/module';
import { User, UserSchool } from './services/user/schema';
import { UserModule } from './services/user/module';
import { FileModule } from './services/file/module';
import { JwtModule } from '@nestjs/jwt';
import { Notice } from './services/notice/schema';
import { Class } from './services/class/schema';
import { Student } from './services/student/schema';
import { Subject } from './services/subject/schema';
import { Teacher } from './services/teacher/schema';
import { NoticeModule } from './services/notice/module';
import { ClasssModule } from './services/class/module';
import { StudentModule } from './services/student/module';
import { TeacherModule } from './services/teacher/module';
import { SubjectModule } from './services/subject/module';

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
        School,
        UserSchool,
        User,
        Notice,
        Class,
        Student,
        Subject,
        Teacher,
      ],
    }),
    SchoolModule,
    UserModule,
    FileModule,
    NoticeModule,
    ClasssModule,
    StudentModule,
    SubjectModule,
    TeacherModule,
    JwtModule.register({ global: true, secret: process.env.JWT_SECRET, signOptions: { expiresIn: '7d' } }),
  ],
  controllers: [AppController],
})
export class AppModule {}
