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

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VisualizerComponent implements OnInit {
  array: number[] = [];
  arraySize: number = 50;
  sortingInProgress = false;

  constructor(private sortingService: SortingService) { }

  ngOnInit(): void {
    this.generateNewArray();
  }

  generateNewArray(): void {
    this.array = Array.from({ length: this.arraySize }, () => Math.floor(Math.random() * 100));
  }

  startBubbleSort(): void {
    this.sortingInProgress = true;
    this.sortingService.bubbleSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
    });
  }

  startMergeSort(): void {
    this.sortingInProgress = true;
    this.sortingService.mergeSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
    });
  }

  startQuickSort(): void {
    this.sortingInProgress = true;
    this.sortingService.quickSort(this.array, (updatedArray) => {
      this.array = updatedArray;
    }).then(() => {
      this.sortingInProgress = false;
    });
  }
}

