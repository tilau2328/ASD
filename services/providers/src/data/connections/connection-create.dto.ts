export interface ConnectionCreate {
    provider: string;
    remoteId: string;
    scope?: string;
    token: string;
    user: string;
}
