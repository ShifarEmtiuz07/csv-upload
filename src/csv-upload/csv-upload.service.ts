import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as csvParser from 'fast-csv';
import * as fs from 'fs';
import { Repository } from 'typeorm';
import { CsvUpload } from './entities/csv-upload.entity'; // Replace with your entity

@Injectable()
export class CsvUploadService {
  constructor(
    @InjectRepository(CsvUpload)
    private readonly CsvUploadRepository: Repository<CsvUpload>,
  ) {}

  async uploadCsv(filePath: string): Promise<void> {
    const records: Partial<CsvUpload>[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser.parse({ headers: true }))
        .on('data', (row) => {
          records.push(row);
        })
        .on('end', async () => {
          try {
            // Insert records into the database
            await this.CsvUploadRepository.save(records);
            resolve();
          } catch (error) {
            reject(error);
          }
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
