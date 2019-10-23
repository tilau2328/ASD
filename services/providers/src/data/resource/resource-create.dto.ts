export interface ResourceCreate {
    name: string;
    method: string;
    endpoint: string;
    provider: string;
    params?: string;
    headers?: string;
    queryParams?: string;
}
