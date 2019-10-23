import {CreateConnectionDto} from "../../providers/connections/connection.api";

export interface SignInDto {
    readonly id: string;
    readonly user: string;
    readonly token: string;
    readonly username?: string;
    readonly connection?: string;
}

export interface CreateSignInDto {
    readonly username?: string;
    readonly password?: string;
    readonly connection?: CreateConnectionDto;
}
