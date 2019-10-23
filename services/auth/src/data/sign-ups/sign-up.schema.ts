import {Schema} from "mongoose";

export const SignUpSchema = new Schema({
    connections: [{ type: Schema.Types.ObjectId, ref: 'Connection' }],
    token: { type: Schema.Types.ObjectId, ref: 'Token' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
});
