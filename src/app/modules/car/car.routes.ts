import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post('/', CarController.carCreateController);
router.get('/', CarController.allCarDetailsController);
router.get('/:carId', CarController.oneCarDetailsController);
router.put('/:carId', CarController.carUpdateController);
router.delete('/:carId', CarController.deleteCarController);

export const CarRoutes = router;
