import {HttpService, Injectable} from "@nestjs/common";
import {CreateProviderDto, UpdateProviderDto, ProviderDto} from "./provider.api";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";

@Injectable()
export class ProviderConnector {
    url: string = 'http://localhost:4000/providers';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<ProviderDto[]> {
        return this.http.get<ProviderDto[]>(this.url).pipe(
            map((res: AxiosResponse<ProviderDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<ProviderDto> {
        return this.http.get<ProviderDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<ProviderDto>) => res.data)
        ).toPromise();
    }

    async create(createProviderDto: CreateProviderDto): Promise<ProviderDto> {
        return this.http.post<ProviderDto>(this.url, createProviderDto).pipe(
            map((res: AxiosResponse<ProviderDto>) => res.data)
        ).toPromise();
    }

    async update(id: string, updateProviderDto: UpdateProviderDto): Promise<ProviderDto> {
        return this.http.patch<ProviderDto>(this.getUrl(id), updateProviderDto).pipe(
            map((res: AxiosResponse<ProviderDto>) => res.data)
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
