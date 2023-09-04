"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_service_1 = require("./src/services/database.service");
const users_routes_1 = require("./src/routes/users.routes");
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, database_service_1.connectToDatabase)().then((result) => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.log("Error", err);
});
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//routes
app.use('/user', users_routes_1.router);
app.get('/', (req, res) => {
    console.log("Hello");
    res.send('Express + TypeScript Server');
});
