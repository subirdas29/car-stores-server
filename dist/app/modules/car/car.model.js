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
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: [true, 'Brand Name is required'],
    },
    model: {
        type: String,
        required: [true, 'Model Name is required'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number'],
    },
    category: {
        type: String,
        enum: {
            values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
            message: '{VALUE} is not a valid Category',
        },
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        // min: [1, 'Please added quantity'],
    },
    isStock: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
carSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update.quantity !== undefined) {
        if (update.quantity > 0) {
            update.isStock = true;
        }
        else {
            update.isStock = false;
        }
    }
    next();
});
carSchema.statics.updateCar = function (carId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const car = yield this.findById(carId);
        if (!car) {
            throw new Error('Car not found');
        }
        if (car.quantity < quantity) {
            throw new Error('Insufficient stock for this car.');
        }
        car.quantity = car.quantity - quantity;
        if (car.quantity === 0) {
            car.isStock = false;
        }
        yield car.save();
        return car;
    });
};
exports.Car = (0, mongoose_1.model)('Car', carSchema);
