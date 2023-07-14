import {CarType} from "../enums/car-type";

export interface Car {
  brand: string;
  plate: string;
  year: number;
  type: CarType;
}
