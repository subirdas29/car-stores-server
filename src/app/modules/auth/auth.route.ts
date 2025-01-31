import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);


router.post(
  '/change-password',

  // validateRequest(AuthValidation.changePasswordValidationSchema),
  auth(USER_ROLES.user),
  AuthControllers.changePassword,
);

router.post(
  '/refresh-token',
  
  //   validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

export const AuthRoutes = router;
