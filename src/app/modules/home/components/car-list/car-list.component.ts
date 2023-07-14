import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @Input() cars: Car[] = [];
  @Output() editCar: EventEmitter<Car> = new EventEmitter<Car>();
  @Output() deleteCar: EventEmitter<number> = new EventEmitter<number>();

  public onEditCar(car: Car): void {
    this.editCar.emit(car);
  }

  public onDeleteCar(index: number): void {
    this.deleteCar.emit(index);
  }
}
