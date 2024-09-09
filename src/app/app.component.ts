import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SortingComparisonComponent } from './sorting-comparison/sorting-comparison.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title = 'sorting-visualizer';
}
