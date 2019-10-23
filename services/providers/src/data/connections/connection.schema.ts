import {Schema} from "mongoose";

export const ConnectionSchema = new Schema({
    provider: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    remoteId: { type: String, required: true },
    token: { type: String, required: true },
    scope: { type: String },
});
