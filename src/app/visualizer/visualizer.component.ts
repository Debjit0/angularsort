// import { Component, OnInit } from '@angular/core';
// import { SortingService } from '../sorting.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-visualizer',
//   templateUrl: './visualizer.component.html',
//   styleUrls: ['./visualizer.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class VisualizerComponent {
//   array: number[] = [];
//   sortedArray: number[] = [];
//   arraySize: number = 50;
//   sortingInProgress = false;

//   constructor(private sortingService: SortingService) { }

//   ngOnInit(): void {
//     this.sortingService.sortedArray$.subscribe(updatedArray => {
//       this.sortedArray = updatedArray;
//       // Trigger change detection to update UI
//       // Alternatively, you can use ngZone or markForCheck
//     });
//     this.generateNewArray();
//   }

//   generateNewArray(): void {
//     this.array = Array.from({ length: this.arraySize }, () => Math.floor(Math.random() * 100));
//   }

//   startBubbleSort(): void {
//     this.sortingService.bubbleSort(this.array, (updatedArray) => {
//       this.array = updatedArray;
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { SortingService } from '../sorting.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VisualizerComponent implements OnInit {
  timeTaken: number = 0;
  timeStart: number = 0;
  timeEnd: number = 0;

  array: number[] = [];
  arraySize: number = 50;
  sortingInProgress = false;

  constructor(private sortingService: SortingService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.generateNewArray();
  }

  getGradientColor(value: number): string {
    const hue = (value / 100) * 240; // Map value to hue (0 to 240 for blue to red)
    return `hsl(${hue}, 70%, 50%)`; // HSL color format
  }

  generateNewArray(): void {
    this.array = Array.from({ length: this.arraySize }, () => Math.floor(Math.random() * 100));
    this.timeTaken = 0
    this.cdr.detectChanges()
  }

  startBubbleSort(): void {
    this.timeStart = performance.now();
    this.sortingInProgress = true;
    this.sortingService.bubbleSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
      this.timeEnd = performance.now();
      this.timeTaken = this.timeEnd - this.timeStart
    });
    
  }

  startMergeSort(): void {
    this.timeStart = performance.now()
    this.sortingInProgress = true;
    this.sortingService.mergeSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
      this.timeEnd = performance.now();
      this.timeTaken = this.timeEnd - this.timeStart
    });
  }

  startQuickSort(): void {
    this.timeStart = performance.now()
    this.sortingInProgress = true;
    this.sortingService.quickSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
      this.timeEnd = performance.now();
      this.timeTaken = this.timeEnd - this.timeStart
    });
  }

  startSelectionSort(): void {
    this.timeStart = performance.now()
    this.sortingInProgress = true;
    this.sortingService.selectionSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
      this.timeEnd = performance.now();
      this.timeTaken = this.timeEnd - this.timeStart
    });
  }

  startHeapSort(): void {
    this.timeStart = performance.now()
    this.sortingInProgress = true;
    this.sortingService.heapSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
      this.timeEnd = performance.now();
      this.timeTaken = this.timeEnd - this.timeStart
    });
  }
}

