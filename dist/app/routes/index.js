"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const car_routes_1 = require("../modules/car/car.routes");
const order_routes_1 = require("../modules/order/order.routes");
const auth_route_1 = require("../modules/auth/auth.route");
const Contact_routes_1 = require("../modules/Contact/Contact.routes");
const Subscribe_routes_1 = require("../modules/Subscribe/Subscribe.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/cars',
        route: car_routes_1.CarRoutes,
    },
    {
        path: '/orders',
        route: order_routes_1.OrderRoutes,
    },
    {
        path: '/contact',
        route: Contact_routes_1.ContactRoutes,
    },
    {
        path: '/subscribe',
        route: Subscribe_routes_1.SubscribeRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
