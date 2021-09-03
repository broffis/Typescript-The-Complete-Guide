import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(data: number[]) {
    super();

    this.data = data;
  }

  data: number[];

  get length(): number { // => the "get" makes this an accessor and therefor it doesn't need to be called ()
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  };

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}