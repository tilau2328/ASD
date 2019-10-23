import {HttpService, Injectable} from "@nestjs/common";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";
import {CreateSignInDto, SignInDto} from "./sign-in.api";

@Injectable()
export class SignInConnector {
    url: string = 'http://localhost:3000/sign-in';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<SignInDto[]> {
        return this.http.get<SignInDto[]>(this.url).pipe(
            map((res: AxiosResponse<SignInDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<SignInDto> {
        return this.http.get<SignInDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<SignInDto>) => res.data)
        ).toPromise();
    }

    async create(createSignInDto: CreateSignInDto): Promise<SignInDto> {
        return this.http.post<SignInDto>(this.url, createSignInDto).pipe(
            map((res: AxiosResponse<SignInDto>) => res.data)
        ).toPromise();
    }

    private getUrl(id: string): string {
        return this.url + `/${id}`;
    }
}
