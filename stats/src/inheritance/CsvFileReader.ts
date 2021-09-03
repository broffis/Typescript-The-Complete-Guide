import fs from 'fs';


export abstract class CsvFileReader<T> {
  constructor(filename: string) {
    this.filename = filename;
  }

  abstract mapRow(row: string[]): T;

  filename: string;
  data: T[] = [];

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((row: string):string[] => row.split(','))
    .map(this.mapRow)
  };
};

