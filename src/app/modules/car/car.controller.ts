/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { carServices } from './car.service';

const carCreateController = async (req: Request, res: Response) => {
  try {
    const carDetails = req.body;
    const result = await carServices.createCarDetailsIntoDB(carDetails);

    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  }
};

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
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  }
};

export const CarController = {
  carCreateController,
  allCarDetailsController,
};
