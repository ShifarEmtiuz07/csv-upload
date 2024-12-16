import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvUploadService } from './csv-upload.service';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('csv-upload')
export class CsvUploadController {
  constructor(private readonly csvUploadService: CsvUploadService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          cb(null, fileName);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    const filePath = path.join('./uploads', file.filename);

    try {
      await this.csvUploadService.uploadCsv(filePath);
      return 'CSV uploaded and data inserted successfully';
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}
