# Car-Stores-Server

## Objective:

A robust and scalable RESTful API built with Node.js, Express.js, TypeScript, and Mongoose. This project provides functionalities for managing a car inventory system, including car creation, updating, ordering, and real-time stock management.

## Live URL:

https://car-stores-server.vercel.app/

## Features

- 🚗 Car Management: Create, update, delete, and fetch car data.
- 📦 Inventory Tracking: Manage car stock dynamically based on orders.
- 💾 Database Integration: Uses MongoDB with Mongoose for schema management.
- 🔧 Middleware Logic: Automatic stock status updates (isStock) based on inventory.
- 📜 Validation: Comprehensive input validation with custom error messages.

- 🌐 RESTful Design: Clean, modular, and scalable API architecture.

## Technologies Used

- Node.js: JavaScript runtime for server-side applications.
- Express.js: Lightweight web framework for building REST APIs.
- TypeScript: Strongly-typed JavaScript for enhanced development experience.
- Mongoose: MongoDB ODM for schema validation and query building.
- ESLint & Prettier: Code quality and formatting tools.

## API Endpoints

### Car Routes

- POST /api/cars: Create a new car.
- GET /api/cars: Retrieve all cars.
- GET /api/cars/:carId: Retrieve a single car by ID.
- PUT /api/cars/:carId: Update car details.
- DELETE /api/cars/:carId: Delete a car.

### Order Routes

- POST /api/orders: Place a new car order.Reduces car quantity and updates isStock status automatically.
- GET /api/orders/revenue: Retrieve all orders.

## Best Practices

- Error Handling: Centralized error handling ensures consistent responses.
- Validation: Input validation ensures only valid data is accepted.
- Modular Design: Separation of concerns for scalability and maintainability.
