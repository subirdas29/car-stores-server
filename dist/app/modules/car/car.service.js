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
exports.CarServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const car_constant_1 = require("./car.constant");
const car_model_1 = require("./car.model");
//Create a Car
const createCar = (file, carData) => __awaiter(void 0, void 0, void 0, function* () {
    if (file) {
        const imageName = `${carData === null || carData === void 0 ? void 0 : carData.brand}${carData === null || carData === void 0 ? void 0 : carData.model}`;
        const path = file === null || file === void 0 ? void 0 : file.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        carData.imageUrl = secure_url;
    }
    const result = yield car_model_1.Car.create(carData);
    return result;
});
// Get All Cars
const allCarsDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const carQuery = new QueryBuilder_1.default(car_model_1.Car.find(), query)
        .filter()
        .sort()
        .paginate()
        .fields()
        .search(car_constant_1.carSearchableFields);
    const result = yield carQuery.modelQuery;
    const meta = yield carQuery.countTotal();
    return {
        result,
        meta
    };
});
// Get a Specific Car
const oneCarDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findById(id);
    if (!result) {
        throw { name: 'NotFoundError', message: 'Car not found' };
    }
    return result;
});
// Update a Specific Car
const carUpdate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndUpdate(id, data, {
        new: true,
    });
    if (!result) {
        throw { name: 'NotFoundError', message: 'Car not found' };
    }
    return result;
});
// Delete a Car
const carDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndDelete(id);
    if (!result) {
        throw { name: 'NotFoundError', message: 'Car not found' };
    }
    return result;
});
exports.CarServices = {
    createCar,
    allCarsDetails,
    oneCarDetails,
    carUpdate,
    carDelete,
};
