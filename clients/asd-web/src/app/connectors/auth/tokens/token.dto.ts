export interface TokenDto {
  readonly id: string;
  readonly user: string;
  readonly accessToken: string;
  readonly tokenValidity: Date;
  readonly refreshToken: string;
  readonly refreshValidity: Date;
}
