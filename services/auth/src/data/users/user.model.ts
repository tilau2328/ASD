import { Document } from 'mongoose';

export interface User extends Document {
    avatarUrl?: string;
    username: string;
    password: string;
    email: string;

    comparePassword: (password: string) => boolean;
}
