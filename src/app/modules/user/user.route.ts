import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { userValidation } from './user.validation';
import { USER_ROLES } from './user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/register',
  validationRequest(userValidation.registerValidationSchema),
  UserController.registerUserController,
);

router.get(
  '/all-users',
  UserController.getAllUsers,
);

router.get(
  '/me',
  auth( USER_ROLES.admin, USER_ROLES.user),
  UserController.getMe,
);

export const UserRoutes = router;
