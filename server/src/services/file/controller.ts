
import { Controller, Get, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Controller('api/file')
export class FileController {
  @Get(':id')
  getFile(@Param()param, @Res() res) {  
    const file = join(process.cwd(), 'upload', param.id);
    if (existsSync(file)) {
      return res.sendFile(file);
    } else {
      throw new HttpException('File not available', HttpStatus.NOT_FOUND);
    }
  }
}