"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const user_constant_1 = require("./user.constant");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(user_validation_1.userValidation.registerValidationSchema), user_controller_1.UserController.registerUserController);
router.get('/all-users', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), user_controller_1.UserController.getAllUsers);
router.get('/:userId', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), user_controller_1.UserController.getAUser);
router.get('/me/details', (0, auth_1.default)(user_constant_1.USER_ROLES.admin, user_constant_1.USER_ROLES.user), user_controller_1.UserController.getMe);
router.get('/my-order/details', (0, auth_1.default)(user_constant_1.USER_ROLES.admin, user_constant_1.USER_ROLES.user), user_controller_1.UserController.getMyOrder);
router.patch('/block-user/:userId', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), user_controller_1.UserController.blockUser);
router.patch('/unblock-user/:userId', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), user_controller_1.UserController.unblockUser);
router.patch('/profile-data', (0, auth_1.default)(user_constant_1.USER_ROLES.admin, user_constant_1.USER_ROLES.user), (0, validateRequest_1.default)(user_validation_1.userValidation.updateProfileSchema), user_controller_1.UserController.profileData);
exports.UserRoutes = router;
