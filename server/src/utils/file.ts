import { createWriteStream, existsSync } from 'fs';
import { unlink } from 'fs/promises';
import { join } from 'path';
import { IFileType } from 'src/types';
import { uuid } from './uuid';

export const saveFile = (file: IFileType) => {
  const ext = file.originalname.split('.').pop();
  const fileName = `${uuid()}.${ext}`;
  const uploadPath = join(process.cwd(), 'upload', fileName);
  const writeStream = createWriteStream(uploadPath);

  return new Promise((resolve, reject) => {
    writeStream.write(file.buffer, (error) => {
      if (error) {
        reject(false);
      } else {
        writeStream.end(() => {
          resolve(fileName);
        });
      }
    });
  },
  );
};



export const deleteFile = async (path:string) => {
  const filePath = join(process.cwd(),  'upload', path);
  if(existsSync(filePath)) await unlink(filePath);
};