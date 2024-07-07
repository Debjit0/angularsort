// import { Injectable } from '@angular/core';
// import { delay } from 'rxjs';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SortingService {

//   constructor() { }
//   private sortedArraySubject = new Subject<number[]>();
//   sortedArray$ = this.sortedArraySubject.asObservable();
//   bubbleSort(array: number[], callback: (updatedArray: number[]) => void): void {
//     const n = array.length;
//     let swapped;

//     do {
//       swapped = false;
//       for (let i = 0; i < n - 1; i++) {
//         if (array[i] > array[i + 1]) {
//           // Swap elements
//           const temp = array[i];
//           array[i] = array[i + 1];
//           array[i + 1] = temp;
//           swapped = true;
//           // Emit current state of array
//           callback([...array]);
//           delay(2000);
//         }
//       }
//     } while (swapped);
//   }
// }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  private sortedArraySubject = new Subject<number[]>();
  sortedArray$ = this.sortedArraySubject.asObservable();

  async bubbleSort(array: number[], callback: (updatedArray: number[]) => void): Promise<void> {
    const n = array.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
          
          callback([...array]);
          
          await this.delay(25);
        }
      }
    } while (swapped);
  }

  async mergeSort(array: number[], callback: (updatedArray: number[]) => void): Promise<void> {
    if (array.length <= 1) {
      return;
    }

    const merge = async (left: number[], right: number[]): Promise<number[]> => {
      let result: number[] = [], leftIndex = 0, rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
        callback([...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
        await this.delay(25);
      }

      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    const mergeSortRecursive = async (array: number[]): Promise<number[]> => {
      if (array.length <= 1) {
        return array;
      }

      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);

      return await merge(await mergeSortRecursive(left), await mergeSortRecursive(right));
    };

    const sortedArray = await mergeSortRecursive(array);
    callback(sortedArray);
  }

  async quickSort(array: number[], callback: (updatedArray: number[]) => void, left: number = 0, right: number = array.length - 1): Promise<void> {
    if (left >= right) {
      return;
    }

    const partition = async (array: number[], left: number, right: number): Promise<number> => {
      const pivot = array[Math.floor((left + right) / 2)];
      let i = left;
      let j = right;

      while (i <= j) {
        while (array[i] < pivot) {
          i++;
        }
        while (array[j] > pivot) {
          j--;
        }
        if (i <= j) {
          [array[i], array[j]] = [array[j], array[i]];
          callback([...array]);
          await this.delay(25);
          i++;
          j--;
        }
      }
      return i;
    };

    const index = await partition(array, left, right);
    if (left < index - 1) {
      await this.quickSort(array, callback, left, index - 1);
    }
    if (index < right) {
      await this.quickSort(array, callback, index, right);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}