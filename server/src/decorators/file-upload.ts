import { UploadedFile as Uploaded, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { applyDecorators, Type } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';


type FileUploadOptions = {
  dto?: Type<any>;          // DTO class for Swagger body
  fieldName?: string;       // name of form-data field
  maxSize?: number;         // max file size in bytes
};

export function UploadedFile(regex?: RegExp) {
  return Uploaded(
    new ParseFilePipe({
      validators: [new FileTypeValidator({ fileType: regex || /(png|jpg|jpeg|webp)$/i })],
    }),
  );
}


/**
 * Bundles FileInterceptor + Swagger decorators for file uploads.
 */
export function FileUpload(options: FileUploadOptions = {}) {
  const {
    dto,
    fieldName = 'file',
    maxSize = 512 * 1024, // default 512 KB
  } = options;

  const decorators: any[] = [
    UseInterceptors(FileInterceptor(fieldName, { limits: { fileSize: maxSize } })),
    ApiConsumes('multipart/form-data'),
  ];

  if (dto) {
    decorators.push(ApiBody({ type: dto }));
  }

  return applyDecorators(...decorators);
}
