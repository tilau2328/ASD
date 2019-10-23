import {Schema} from "mongoose";

export const ResourceSchema = new Schema({
    provider: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
    endpoint: { type: String, required: true },
    method: { type: String, required: true },
    name: { type: String, required: true },
    queryParams: { type: String },
    headers: { type: String },
    params: { type: String },
});
