"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const car_service_1 = require("./car.service");
const car_validation_1 = __importDefault(require("./car.validation"));
//Create a CarController
const carCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carDetails = req.body;
        const zodParseData = car_validation_1.default.parse(carDetails);
        const result = yield car_service_1.carServices.createCarDetailsIntoDB(zodParseData);
        res.status(200).json({
            success: true,
            message: 'Car created successfully',
            data: result,
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error: err,
            });
        }
    }
});
// Get All CarsController
const allCarDetailsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.carServices.allCarsDetails();
        res.status(200).json({
            success: true,
            message: 'Cars retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: err.message || 'Something went wrong',
                error: err,
            });
        }
    }
});
// Get One CarsController
const oneCarDetailsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.oneCarDetails(carId);
        res.status(200).json({
            success: true,
            message: 'Car retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: err.message || 'Something went wrong',
                error: err,
            });
        }
    }
});
//Update a CarController
const carUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const carData = req.body;
        const result = yield car_service_1.carServices.carUpdate(carId, carData);
        res.status(200).json({
            success: true,
            message: 'Car updated successfully',
            data: result,
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: err.message || 'Something went wrong',
                error: err,
            });
        }
    }
});
//Delete CarController
const deleteCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        yield car_service_1.carServices.carDelete(carId);
        res.status(200).json({
            success: true,
            message: 'Car deleted successfully',
            result: {},
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: err.message || 'Something went wrong',
                error: err,
            });
        }
    }
});
exports.CarController = {
    carCreateController,
    allCarDetailsController,
    oneCarDetailsController,
    carUpdateController,
    deleteCarController,
};
