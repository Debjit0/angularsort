import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizerComponent } from './visualizer/visualizer.component';


const routes: Routes = [
  { path: '', component: VisualizerComponent },

];

// const routes: Routes = [
//   { path: '', component: SortingComparisonComponent },

// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
