export interface ClientDto {
    readonly id: string;
    readonly name: string;
    readonly scope: string;
    readonly clientId: string;
    readonly clientSecret: string;
}

export interface CreateClientDto {
    readonly name: string;
    readonly scope: string;
    readonly clientId: string;
    readonly clientSecret: string;
}

export interface UpdateClientDto {
    readonly name?: string;
    readonly scope?: string;
    readonly clientId?: string;
    readonly clientSecret?: string;
}
