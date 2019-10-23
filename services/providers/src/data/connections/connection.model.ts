import { Document } from 'mongoose';

export interface Connection extends Document {
    provider: string;
    remoteId: string;
    scope?: string;
    token: string;
    user: string;
}
