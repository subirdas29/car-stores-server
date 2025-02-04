"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const car_validation_1 = require("./car.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), sendImageToCloudinary_1.upload.single('file'), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(car_validation_1.CarValidation.carSchema), car_controller_1.CarController.createCarController);
router.get('/', car_controller_1.CarController.getAllCarController);
router.get('/:carId', (0, auth_1.default)(user_constant_1.USER_ROLES.admin, user_constant_1.USER_ROLES.user), car_controller_1.CarController.oneCarDetailsController);
router.put('/:carId', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), (0, validateRequest_1.default)(car_validation_1.CarValidation.updateCarSchema), car_controller_1.CarController.carUpdateController);
router.patch('/delete/:carId', (0, auth_1.default)(user_constant_1.USER_ROLES.admin), car_controller_1.CarController.carDeleteController);
exports.CarRoutes = router;
