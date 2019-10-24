import {ConnectionDto, CreateConnectionDto} from "../../providers/connections/connection.dto";


export interface SignUpDto {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly connections: ConnectionDto[];
}

export interface CreateSignUpDto {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly connections: CreateConnectionDto[];
}
