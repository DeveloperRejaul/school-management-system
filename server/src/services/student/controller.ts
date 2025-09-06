import {Controller} from '@nestjs/common';
import { StudentService } from './service';

@Controller('/api/student')
export class StudentController  {
  constructor(private readonly service: StudentService) {}

}