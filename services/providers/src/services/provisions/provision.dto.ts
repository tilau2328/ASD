export interface ProvisionDto {
    readonly id: string;
    readonly name: string;
    readonly scope: string;
    readonly client: string;
    readonly provider: string;
    readonly clientId: string;
    readonly clientSecret: string;
}

export interface CreateProvisionDto {
    readonly name: string;
    readonly scope: string;
    readonly client: string;
    readonly provider: string;
    readonly clientId: string;
    readonly clientSecret: string;
}

export interface UpdateProvisionDto {
    readonly name?: string;
    readonly scope?: string;
    readonly clientId?: string;
    readonly clientSecret?: string;
}
