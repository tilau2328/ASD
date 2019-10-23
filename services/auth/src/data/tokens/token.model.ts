import {Document} from "mongoose";

export interface Token extends Document {
    user: string;
    accessToken: string;
    refreshToken: string;
    tokenValidity: Date;
    refreshValidity: Date;
}
