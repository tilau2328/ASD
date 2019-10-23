import {HttpService, Injectable} from "@nestjs/common";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";
import {CreateSignUpDto, SignUpDto} from "./sign-up.api";

@Injectable()
export class SignUpConnector {
    url: string = 'http://localhost:3000/sign-in';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<SignUpDto[]> {
        return this.http.get<SignUpDto[]>(this.url).pipe(
            map((res: AxiosResponse<SignUpDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<SignUpDto> {
        return this.http.get<SignUpDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<SignUpDto>) => res.data)
        ).toPromise();
    }

    async create(createSignUpDto: CreateSignUpDto): Promise<SignUpDto> {
        return this.http.post<SignUpDto>(this.url, createSignUpDto).pipe(
            map((res: AxiosResponse<SignUpDto>) => res.data)
        ).toPromise();
    }

    private getUrl(id: string): string {
        return this.url + `/${id}`;
    }
}
