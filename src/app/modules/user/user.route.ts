import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { userValidation } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validationRequest(userValidation.registerValidationSchema),
  UserController.registerUserController,
);

export const UserRoutes = router;
