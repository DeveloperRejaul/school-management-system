import {Controller} from '@nestjs/common';
import { NoticeService } from './service';

@Controller('/api/notice')
export class NoticeController  {
  constructor(private readonly service: NoticeService) {}
}