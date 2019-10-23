import {Schema} from "mongoose";

export const SignInSchema = new Schema({
    connection: { type: Schema.Types.ObjectId, ref: 'Connection' },
    token: { type: Schema.Types.ObjectId, ref: 'Token' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    username: { type: String },
});
