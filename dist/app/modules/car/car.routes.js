"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const router = express_1.default.Router();
router.post('/', car_controller_1.CarController.carCreateController);
router.get('/', car_controller_1.CarController.allCarDetailsController);
router.get('/:carId', car_controller_1.CarController.oneCarDetailsController);
router.put('/:carId', car_controller_1.CarController.carUpdateController);
router.delete('/:carId', car_controller_1.CarController.deleteCarController);
exports.CarRoutes = router;
