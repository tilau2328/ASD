import {HttpHeaders} from "@angular/common/http";
import {TokenDto} from "../../../connectors/auth/tokens/token.dto";
import {Cookie} from "ng2-cookies";

const ACCESS_TOKEN: string = 'ACCESS_TOKEN';
const REFRESH_TOKEN: string = 'REFRESH_TOKEN';

export function hasAccessToken(): boolean {
  return Cookie.check(ACCESS_TOKEN);
}

export function getRefreshToken(): string {
  return Cookie.get(REFRESH_TOKEN);
}

export function setAccessToken(token?: TokenDto) {
  if (token) {
    const { accessToken, refreshToken, tokenValidity, refreshValidity } = token;
    Cookie.set(ACCESS_TOKEN, accessToken, tokenValidity);
    Cookie.set(REFRESH_TOKEN, refreshToken, refreshValidity);
  } else if (hasAccessToken()) {
    Cookie.delete(ACCESS_TOKEN);
    Cookie.delete(REFRESH_TOKEN);
  }
}

export function addAuthHeaders(headers: HttpHeaders = new HttpHeaders()): HttpHeaders {
  if (hasAccessToken()) {
    headers.set('Authorization', Cookie.get(ACCESS_TOKEN))
  }
  return headers;
}
