import { Document } from 'mongoose';

export interface Provider extends Document {
    name: string;
    userUrl: string;
    authUrl: string;
    tokenUrl: string;
}
