import {CreateConnectionDto} from "../../../connectors/providers/connection/connection.api";

export interface SignInDto {
    readonly id: string;
    readonly user: string;
    readonly token: string;
    readonly username?: string;
    readonly connections?: string;
}

export interface CreateSignInDto {
    readonly username?: string;
    readonly password?: string;
    readonly connection?: CreateConnectionDto;
}
