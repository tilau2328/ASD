import {Schema} from "mongoose";

export const ClientSchema = new Schema({
    name: { type: String, unique: true },
    scope: { type: String, required: true },
    clientId: { type: String, unique: true },
    clientSecret: { type: String, required: true },
});
