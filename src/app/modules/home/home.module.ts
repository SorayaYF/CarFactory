import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    CarFormComponent,
    CarListComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule { }
