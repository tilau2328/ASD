import {Schema} from "mongoose";

export const ProvisionSchema = new Schema({
    name: { type: String, required: true },
    scope: { type: String, required: true },
    client: { type: String, required: true },
    clientId: { type: String, required: true },
    clientSecret: { type: String, required: true },
    provider: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
});
