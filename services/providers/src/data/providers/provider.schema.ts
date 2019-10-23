import {Schema} from "mongoose";

export const ProviderSchema = new Schema({
    name: { type: String, unique: true },
    scope: { type: String, required: true },
    userUrl: { type: String, required: true },
    authUrl: { type: String, required: true },
    tokenUrl: { type: String, required: true },
    tokenParam: { type: String, required: true },
    remoteIdParam: { type: String, required: true },
});
