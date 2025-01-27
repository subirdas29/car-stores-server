"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    car: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Car',
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
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
