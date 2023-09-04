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
exports.UserController = void 0;
const user_helper_1 = require("../helper/user.helper");
class userController {
    constructor() {
        //add user controller
        this.addUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //data to be saved in database
            const data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                gender: req.body.gender
            };
            //validating the request
            // const { error, value } = userschemaValidate.validate(data)
            // if (error) {
            //     res.send(error.message)
            // } else {
            //call the create user function in the service and pass the data from the request
            const user = yield user_helper_1.userServices.createUser(data);
            res.status(201).send(user);
            // }
        });
        //get all users
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("Inside getUsers");
            const users = yield user_helper_1.userServices.getUsers();
            res.send(users);
        });
        //get a single user
        this.getAUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //get id from the parameter
            const id = req.params.id;
            const user = yield user_helper_1.userServices.getUser(id);
            res.send(user);
        });
        //update user
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield user_helper_1.userServices.updateUser(id, req.body);
            res.send(user);
        });
        //delete a user
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield user_helper_1.userServices.deleteUser(id);
            res.send('user deleted');
        });
    }
}
//export class
exports.UserController = new userController();
