"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
//initiating the router
exports.router = express_1.default.Router();
//add user route
exports.router.post('/', user_controller_1.UserController.addUser);
//get users
exports.router.get('/', user_controller_1.UserController.getUsers);
//get single user
exports.router.get('/:id', user_controller_1.UserController.getAUser);
//update a user
exports.router.put('/:id', user_controller_1.UserController.updateUser);
//delete a user
exports.router.delete('/:id', user_controller_1.UserController.deleteUser);
