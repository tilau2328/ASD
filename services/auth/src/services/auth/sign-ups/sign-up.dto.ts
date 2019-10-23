import {CreateConnectionDto} from "../../../connectors/providers/connection/connection.api";

export interface SignUpDto {
    readonly id: string;
    readonly user: string;
    readonly email: string;
    readonly token: string;
    readonly username: string;
    readonly connections?: string[];
}

export interface CreateSignUpDto {
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly connections?: CreateConnectionDto[];
}
