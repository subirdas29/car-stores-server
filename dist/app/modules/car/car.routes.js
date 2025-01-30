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
const router = express_1.default.Router();
router.post('/', sendImageToCloudinary_1.upload.single('file'), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(car_validation_1.CarValidation.carSchema), car_controller_1.CarController.createCarController);
router.get('/', car_controller_1.CarController.getAllCarController);
router.get('/:carId', car_controller_1.CarController.oneCarDetailsController);
router.put('/:carId', car_controller_1.CarController.carUpdateController);
router.delete('/:carId', car_controller_1.CarController.deleteCarController);
exports.CarRoutes = router;
