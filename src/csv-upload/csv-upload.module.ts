import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CsvUploadService } from './csv-upload.service';
import { CsvUploadController } from './csv-upload.controller';
import { CsvUpload } from './entities/csv-upload.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CsvUpload])],
  controllers: [CsvUploadController],
  providers: [CsvUploadService],
})
export class CsvUploadModule {}
