export interface ProviderDto {
    readonly id: string;
    readonly name: string;
    readonly userUrl: string;
    readonly authUrl: string;
    readonly tokenUrl: string;
}

export interface CreateProviderDto {
    readonly name: string;
    readonly userUrl: string;
    readonly authUrl: string;
    readonly tokenUrl: string;
}

export interface UpdateProviderDto {
    readonly name?: string;
    readonly userUrl?: string;
    readonly authUrl?: string;
    readonly tokenUrl?: string;
}
