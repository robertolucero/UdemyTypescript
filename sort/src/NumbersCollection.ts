import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter {
    data: number[];
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    };

    swap (leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };

    get length(): number {
        return this.data.length;
    }


    constructor(data: number[]) {
        super();
        this.data = data;
    }

}