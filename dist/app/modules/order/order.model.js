"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Invalid email format'],
        trim: true,
    },
    car: {
        type: String,
        required: [true, 'Car is required'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
        min: [0, 'Total price cannot be negative'],
    },
}, {
    timestamps: true,
});
// Pre-save hook for calculating total price
orderSchema.pre('save', function (next) {
    if (this.quantity > 0 && this.totalPrice > 0) {
        this.totalPrice = this.quantity * this.totalPrice;
    }
    next();
});
// Export the model
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
