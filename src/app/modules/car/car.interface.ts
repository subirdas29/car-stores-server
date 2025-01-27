import { Model } from 'mongoose';

export type TCategory = 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible'

export type TCar = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: TCategory;
  description: string;
  quantity: number;
  isStock?: boolean | 'undefined';
  createdAt?: Date;
  updatedAt?: Date;
};

export interface CarModel extends Model<TCar> {
  updateCar(carId: string, quantity: number): Promise<TCar | null>;
}
