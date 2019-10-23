import { Document } from 'mongoose';

export interface Provision extends Document {
    name: string;
    scope: string;
    client: string;
    provider: string;
    clientId: string;
    clientSecret: string;
}
