import {ConnectionDto, CreateConnectionDto} from "../../providers/connections/connection.dto";
import {ClientDto} from "../clients/client.dto";

export interface SignInDto {
  id: string;
  username?: string;
  connection?: ConnectionDto;
}

export interface CreateSignInDto {
  username?: string;
  password?: string;
  connection?: CreateConnectionDto;
}

export interface SignInEventDto {
  readonly type: string;
  readonly payload: SignInDto;
}
