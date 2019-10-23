export interface ConnectionDto {
    id?: string;
    user: string;
    scope?: string;
    token: string;
    remoteId: string;
    provider: string;
}

export interface CreateConnectionDto {
    provider: string;
    state: string;
    user: string;
    code: string;
}

export interface UpdateConnectionDto {
    provider: string;
    state: string;
    code: string;
}

export interface RemoteUserDto {
    token?: RemoteTokenDto;
    avatarUrl?: string;
    remoteId?: string;
    email?: string;
}

export interface RemoteTokenDto {
    accessToken: string;
    scope: string;
}
