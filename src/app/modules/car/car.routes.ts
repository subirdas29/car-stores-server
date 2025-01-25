import express from 'express';
import { CarController } from './car.controller';
import { CarValidation } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post('/',validateRequest(CarValidation.carSchema), CarController.createCarController);

router.get('/', CarController.getAllCarController);

router.get('/:carId', CarController.oneCarDetailsController);

router.put('/:carId', CarController.carUpdateController);

router.delete('/:carId', CarController.deleteCarController);

export const CarRoutes = router;
