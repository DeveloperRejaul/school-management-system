import { Controller} from '@nestjs/common';
import { SubjectService } from './service';


@Controller('/api/subject')
export class SubjectController  {
  constructor(private readonly service: SubjectService) {}
}