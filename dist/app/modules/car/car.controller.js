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
// Centralized error handler for Validation and Not Found errors
const handleControllerError = (err, res) => {
    if (err.name === 'ValidationError') {
        // Handle validation errors
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            error: {
                name: err.name,
                errors: err.errors, // Detailed errors
            },
            stack: err.stack,
        });
    }
    else if (err.name === 'NotFoundError') {
        // Handle not found errors
        return res.status(404).json({
            success: false,
            message: err.message || 'Resource not found',
            error: {
                name: err.name,
            },
        });
    }
    else {
        // Handle other types of errors
        return res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: {
                name: err.name,
                message: err.message,
                stack: err.stack,
            },
        });
    }
};
// Create a CarController
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
        handleControllerError(err, res);
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
        handleControllerError(err, res);
    }
});
// Get One CarController
const oneCarDetailsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.oneCarDetails(carId);
        if (!result) {
            throw { name: 'NotFoundError', message: 'Car not found' }; // Throw 404 error
        }
        res.status(200).json({
            success: true,
            message: 'Car retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        handleControllerError(err, res);
    }
});
// Update a CarController
const carUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const carData = req.body;
        const result = yield car_service_1.carServices.carUpdate(carId, carData);
        if (!result) {
            throw { name: 'NotFoundError', message: 'Car not found for update' };
        }
        res.status(200).json({
            success: true,
            message: 'Car updated successfully',
            data: result,
        });
    }
    catch (err) {
        handleControllerError(err, res);
    }
});
// Delete CarController
const deleteCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.carDelete(carId);
        if (!result) {
            throw { name: 'NotFoundError', message: 'Car not found for deletion' };
        }
        res.status(200).json({
            success: true,
            message: 'Car deleted successfully',
        });
    }
    catch (err) {
        handleControllerError(err, res);
    }
});
exports.CarController = {
    carCreateController,
    allCarDetailsController,
    oneCarDetailsController,
    carUpdateController,
    deleteCarController,
};
