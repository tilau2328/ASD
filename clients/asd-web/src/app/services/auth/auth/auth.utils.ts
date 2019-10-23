import {HttpHeaders} from "@angular/common/http";
import {Cookie} from "ng2-cookies";

export function addAuthHeaders(headers: HttpHeaders = new HttpHeaders()): HttpHeaders {
  if (Cookie.check('access_token')) {
    headers.set('Authorization', Cookie.get('access_token'))
  }
  return headers;
}

export function setAccessToken(token?: string) {
  if (token) {
    Cookie.set('access_token', token);
  } else if (hasAccessToken()) {
    Cookie.delete('access_token');
  }
}

export function hasAccessToken(): boolean {
  return Cookie.check('access_token');
}
