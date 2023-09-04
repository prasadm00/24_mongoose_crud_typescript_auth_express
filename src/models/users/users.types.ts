import { Document, Model } from "mongoose";


export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    lastUpdated?: Date;
    gender: String;
}

export interface IUserDocument extends IUser, Document { }
export interface IUserModel extends Model<IUserDocument> { }
