import { PartialType } from '@nestjs/mapped-types';
import { CreateCsvUploadDto } from './create-csv-upload.dto';

export class UpdateCsvUploadDto extends PartialType(CreateCsvUploadDto) {}
