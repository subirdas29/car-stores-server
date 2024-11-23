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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const car_service_1 = require("./car.service");
// import carSchemaValidation from './car.validation';
//Create a CarController
const carCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carDetails = req.body;
        const result = yield car_service_1.carServices.createCarDetailsIntoDB(carDetails);
        res.status(200).json({
            success: true,
            message: 'Car created successfully',
            data: result,
        });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
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
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
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
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
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
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
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
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
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
