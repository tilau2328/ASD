import {Schema} from "mongoose";

export const TokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    refreshValidity: { type: Date, required: true },
    tokenValidity: { type: Date, required: true },
    refreshToken: { type: String, unique: true },
    accessToken: { type: String, unique: true },
});
