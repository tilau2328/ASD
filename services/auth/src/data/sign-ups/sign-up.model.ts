import {Document} from "mongoose";

export interface SignUp extends Document {
    connections?: string[];
    username: string;
    password: string;
    email: string;
    token: string;
    user: string;
    id: string;
}
