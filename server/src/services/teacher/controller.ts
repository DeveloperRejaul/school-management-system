import {Controller} from '@nestjs/common';
import { TeacherService } from './service';



@Controller('/api/teacher')
export class TeacherController  {
  constructor(private readonly service: TeacherService) {}

}