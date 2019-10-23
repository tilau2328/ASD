import {ConnectionDto, CreateConnectionDto} from "../../providers/providers/dto/connection.dto";

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
