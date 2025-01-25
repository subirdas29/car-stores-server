import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import httpStatus from 'http-status';

const registerUserController = catchAsync(async (req, res) => {
  const result = await UserServices.registerUser(req.body);

  const { _id, name, email } = result;

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: httpStatus.CREATED,
    data: {
      _id,
      name,
      email,
    },
  });
});

export const UserController = {
  registerUserController,
};
