import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post('/', CarController.carCreateController);
router.get('/', CarController.allCarDetailsController);
router.get('/:carId', CarController.allCarDetailsController);

export const CarRoutes = router;
