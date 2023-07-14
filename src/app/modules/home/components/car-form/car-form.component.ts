import { Component, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';
import { CarType } from '../../enums/car-type';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent {
  car: Car = {
    brand: '',
    plate: '',
    year: 0,
    type: CarType.Popular
  };

  carTypes = Object.values(CarType);

  @Output() saveCar: EventEmitter<Car> = new EventEmitter<Car>();

  public onSave(): void {
    this.saveCar.emit(this.car);
    this.car = {
      brand: '',
      plate: '',
      year: 0,
      type: CarType.Popular
    };
  }
}
