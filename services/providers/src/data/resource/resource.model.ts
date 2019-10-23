import { Document } from 'mongoose';

export interface Resource extends Document {
    name: string;
    method: string;
    endpoint: string;
    provider: string;
    headers?: string;
    params?: string;
    queryParams?: string;
}
