import { Schema, model } from "mongoose";
import { Error } from './error';
export interface User {
  userName: string;
  email: string;
  password: string;
}

export interface sessionData {
  userId: string;
  token: any;
  tokenExpiration: number;
  err?: Error;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface accountCreationData {
  hasCreated: boolean;
  err?: Error
}

//interfaces to type the user data

//create the schema fr the user in the database
const userSchema = new Schema<User>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,//store the createdAt and updatedAt fields in a doucument
  }
);

export const UserMDB = model<User>('user', userSchema); //create a mongoose document model for users using the userSchema 
