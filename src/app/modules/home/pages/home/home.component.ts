import { Component } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cars: Car[] = [];
  selectedCar: Car | null = null;

  public onSaveCar(car: Car): void {
    if (this.selectedCar) {
      const index = this.cars.findIndex(c => c === this.selectedCar);
      if (index !== -1) {
        this.cars[index] = car;
      }
      this.selectedCar = null;
    } else {
      this.cars.push(car);
    }
  }

  public onEditCar(car: Car): void {
    this.selectedCar = car;
  }

  public onDeleteCar(index: number): void {
    this.cars.splice(index, 1);
  }
}
