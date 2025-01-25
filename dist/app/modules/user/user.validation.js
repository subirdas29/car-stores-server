"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const registerValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: 'Name is required' }),
        email: zod_1.z.string().email({ message: 'Invalid email address' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
    }),
});
exports.userValidation = {
    registerValidationSchema,
};
