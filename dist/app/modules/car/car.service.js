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
exports.carServices = void 0;
const car_model_1 = require("./car.model");
//Create a Car
const createCarDetailsIntoDB = (carData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.create(carData);
    return result;
});
// Get All Cars
const allCarsDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.find();
    return result;
});
// Get a Specific Car
const oneCarDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findById(id);
    return result;
});
// Update a Specific Car
const carUpdate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndUpdate(id, data, {
        new: true,
    });
    return result;
});
// Delete a Car
const carDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndDelete(id);
    return result;
});
exports.carServices = {
    createCarDetailsIntoDB,
    allCarsDetails,
    oneCarDetails,
    carUpdate,
    carDelete,
};
