import express, { NextFunction, Request, Response } from 'express';
import { CarController } from './car.controller';
import { CarValidation } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post('/',
    upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
      req.body = JSON.parse(req.body.data);
      next();
    },
    
    validateRequest(CarValidation.carSchema), CarController.createCarController);

router.get('/', CarController.getAllCarController);

router.get('/:carId', CarController.oneCarDetailsController);

router.put('/:carId', CarController.carUpdateController);

router.patch('/delete/:carId', CarController.carDeleteController);

export const CarRoutes = router;
