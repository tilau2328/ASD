import {HttpService, Injectable} from "@nestjs/common";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";
import {CreateProvisionDto, UpdateProvisionDto, ProvisionDto} from "./provision.api";

@Injectable()
export class ProvisionConnector {
    url: string = 'http://localhost:4000/provisions';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<ProvisionDto[]> {
        return this.http.get<ProvisionDto[]>(this.url).pipe(
            map((res: AxiosResponse<ProvisionDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<ProvisionDto> {
        return this.http.get<ProvisionDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<ProvisionDto>) => res.data)
        ).toPromise();
    }

    async create(createProvisionDto: CreateProvisionDto): Promise<ProvisionDto> {
        return this.http.post<ProvisionDto>(this.url, createProvisionDto).pipe(
            map((res: AxiosResponse<ProvisionDto>) => res.data)
        ).toPromise();
    }

    async update(id: string, updateProvisionDto: UpdateProvisionDto): Promise<ProvisionDto> {
        return this.http.patch<ProvisionDto>(this.getUrl(id), updateProvisionDto).pipe(
            map((res: AxiosResponse<ProvisionDto>) => res.data)
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
