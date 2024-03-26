import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer'
import * as path from 'path'
@Controller()
export class UploadController {
  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: './assets',
        filename: (req, file, cb) => {
            const timestamp = new Date().getTime(); // Get current timestamp
            const extension = path.extname(file.originalname); // Get file extension
            const uniqueFilename = `${timestamp}${extension}`; //
          cb(null, `${uniqueFilename}`);
        },
      }),
    }),
  )
  async Fileupload(@UploadedFile() file) {
          console.log(file);
         return "success"
  }
}
