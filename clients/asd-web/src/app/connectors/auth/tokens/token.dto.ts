import {SignUpDto} from "../sign-ups/sign-up.dto";

export interface TokenDto {
  readonly id: string;
  readonly user: string;
  readonly accessToken: string;
  readonly tokenValidity: Date;
  readonly refreshToken: string;
  readonly refreshValidity: Date;
}

export interface TokenEventDto {
  readonly type: string;
  readonly payload: TokenDto;
}
