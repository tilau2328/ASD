import {HttpService, Injectable} from "@nestjs/common";
import {TokenDto} from "./token.api";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";


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

    async delete(id: string): Promise<TokenDto> {
        return this.http.delete<TokenDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<TokenDto>) => res.data)
        ).toPromise();
    }

    private getUrl(id: string): string {
        return this.url + `/${id}`;
    }
}
