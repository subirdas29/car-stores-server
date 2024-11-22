import { Model } from 'mongoose';

export type TCar = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
  description: string;
  quantity: number;
  isStock: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface CarModel extends Model<TCar> {
  updateCar(carId: string, quantity: number): Promise<TCar | null>;
}
