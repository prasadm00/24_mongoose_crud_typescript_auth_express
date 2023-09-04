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
exports.userServices = exports.userService = void 0;
const users_model_1 = require("../models/users/users.model");
class userService {
    //create a user
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield users_model_1.UserModel.create(data);
                return newUser;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //get all users
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield users_model_1.UserModel.find({});
                return users;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //get a single user
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_model_1.UserModel.findById({ _id: id });
                if (!user) {
                    return 'user not available';
                }
                return user;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //update a user
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const userz = yield users_model_1.UserModel.findByIdAndUpdate({ _id: id }, data, { new: true });
                if (!userz) {
                    return "user not available";
                }
                return userz;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //delete a user by using the find by id and delete 
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_model_1.UserModel.findByIdAndDelete(id);
                if (!user) {
                    return 'user not available';
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.userService = userService;
//export the class
exports.userServices = new userService();
