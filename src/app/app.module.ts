import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { SortingService } from './sorting.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@NgModule({
  declarations: [
    //VisualizerComponent
  ],
  imports: [
    BrowserModule,
    //CommonModule,
    AppRoutingModule
  ],
  providers: [SortingService]
})
export class AppModule { }
