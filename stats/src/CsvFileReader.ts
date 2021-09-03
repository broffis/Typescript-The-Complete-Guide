import fs from 'fs';

export class CsvFileReader {
  constructor(filename: string) {
    this.filename = filename;
  }

  filename: string;
  data: string[][] = [];

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((row: string):string[] => row.split(','))
  }
}