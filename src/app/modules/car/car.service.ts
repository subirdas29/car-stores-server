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
const oneCarDetails = async (id: string) => {
  const result = await Car.findById(id);
  if (!result) {
    throw { name: 'NotFoundError', message: 'Car not found' };
  }
  return result;
};

// Update a Specific Car
const carUpdate = async (id: string, data: Partial<TCar>) => {
  const result = await Car.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!result) {
    throw { name: 'NotFoundError', message: 'Car not found' };
  }
  return result;
};

// Delete a Car
const carDelete = async (id: string) => {
  const result = await Car.findByIdAndDelete(id);
  if (!result) {
    throw { name: 'NotFoundError', message: 'Car not found' };
  }
  return result;
};

export const carServices = {
  createCarDetailsIntoDB,
  allCarsDetails,
  oneCarDetails,
  carUpdate,
  carDelete,
};
