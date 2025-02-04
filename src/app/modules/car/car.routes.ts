import express, { NextFunction, Request, Response } from 'express';
import { CarController } from './car.controller';
import { CarValidation } from './car.validation';
import validateRequest from '../../middlewares/validateRequest';
import { upload } from '../../utils/sendImageToCloudinary';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';

const router = express.Router();

router.post('/',
  auth(USER_ROLES.admin),
    upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
      req.body = JSON.parse(req.body.data);
      next();
    },
    
    validateRequest(CarValidation.carSchema), CarController.createCarController);

router.get('/',
  auth(USER_ROLES.admin,USER_ROLES.user),
  CarController.getAllCarController);

router.get('/:carId',
  auth(USER_ROLES.admin,USER_ROLES.user),
   CarController.oneCarDetailsController);

router.put('/:carId',
  auth(USER_ROLES.admin),
  validateRequest(CarValidation.updateCarSchema),
  CarController.carUpdateController);

router.patch('/delete/:carId', 
  auth(USER_ROLES.admin),
  CarController.carDeleteController);

export const CarRoutes = router;
