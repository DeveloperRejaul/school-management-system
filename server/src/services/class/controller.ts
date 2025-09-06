import {Controller} from '@nestjs/common';
import { ClassService } from './service';


@Controller('/api/class')
export class ClassController  {
  constructor(private readonly service: ClassService) {}

}