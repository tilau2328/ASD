import {CreateResourceDto} from "../resources/resource.api";

export interface ProviderDto {
    readonly id: string;
    readonly name: string;
    readonly userUrl: string;
    readonly authUrl: string;
    readonly tokenUrl: string;
}

export interface CreateProviderDto {
    readonly name: string;
    readonly userUrl: CreateResourceDto;
    readonly authUrl: CreateResourceDto;
    readonly tokenUrl: CreateResourceDto;
}

export interface UpdateProviderDto {
    readonly name?: string;
    readonly userUrl?: string;
    readonly authUrl?: string;
    readonly tokenUrl?: string;
}
