import { TCar } from './car.interface';
import { Car } from './car.model';

//Create a Car
const createCarDetailsIntoDB = async (carData: TCar) => {
  const result = await Car.create(carData);
  return result;
};

// Get All Cars
const allCarsDetails = async () => {
  const result = await Car.find();
  return result;
};

// Get a Specific Car

export const carServices = {
  createCarDetailsIntoDB,
  allCarsDetails,
};
