/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { carServices } from './car.service';
import carSchemaValidation from './car.validation';

//Create a CarController
const carCreateController = async (req: Request, res: Response) => {
  try {
    const carDetails = req.body;

    const zodParseData = carSchemaValidation.parse(carDetails);

    const result = await carServices.createCarDetailsIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err,
      });
    }
  }
};

// Get All CarsController
const allCarDetailsController = async (req: Request, res: Response) => {
  try {
    const result = await carServices.allCarsDetails();

    res.status(200).json({
      success: true,
      message: 'Cars retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }
};

// Get One CarsController
const oneCarDetailsController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.oneCarDetails(carId);

    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }
};

//Update a CarController
const carUpdateController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carData = req.body;
    const result = await carServices.carUpdate(carId, carData);

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }
};

//Delete CarController
const deleteCarController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    await carServices.carDelete(carId);

    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      result: {},
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }
};

export const CarController = {
  carCreateController,
  allCarDetailsController,
  oneCarDetailsController,
  carUpdateController,
  deleteCarController,
};
