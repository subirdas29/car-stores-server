"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    car: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
orderSchema.pre('save', function (next) {
    if (this.quantity > 0) {
        this.totalPrice = this.quantity * this.totalPrice;
    }
    next();
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
