import { Document } from 'mongoose';

export interface Client extends Document {
    clientSecret: string;
    clientId: string;
    scope: string;
    name: string;
}
