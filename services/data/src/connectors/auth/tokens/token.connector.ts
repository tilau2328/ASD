import {map} from "rxjs/operators";
import {TokenDto} from "./token.api";
import { AxiosResponse } from "axios";
import {HttpService, Injectable} from "@nestjs/common";

@Injectable()
export class TokenConnector {
    url: string = 'http://localhost:3000/tokens';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<TokenDto[]> {
        return this.http.get<TokenDto[]>(this.url).pipe(
            map((res: AxiosResponse<TokenDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<TokenDto> {
        return this.http.get<TokenDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<TokenDto>) => res.data)
        ).toPromise();
    }

    async refreshToken(refreshToken: string): Promise<TokenDto> {
        return this.http.post<TokenDto>(`${this.url}/refresh/${refreshToken}`).pipe(
            map((res: AxiosResponse<TokenDto>) => res.data)
        ).toPromise();
    }

    async revokeToken(refreshToken: string) {
        return this.http.delete<TokenDto>(`${this.url}/refresh/${refreshToken}`).pipe(
            map((res: AxiosResponse<TokenDto>) => res.data)
        ).toPromise();
    }

    async delete(id: string): Promise<string> {
        return this.http.delete<string>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<string>) => res.data)
        ).toPromise();
    }

    private getUrl(id: string): string {
        return this.url + `/${id}`;
    }
}
