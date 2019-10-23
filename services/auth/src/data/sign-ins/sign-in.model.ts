import { Document } from 'mongoose';

export interface SignIn extends Document {
    connection?: string;
    username?: string;
    token: string;
    user: string;
}
