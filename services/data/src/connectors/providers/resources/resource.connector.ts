import {HttpService, Injectable} from "@nestjs/common";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";
import {CreateResourceDto, UpdateResourceDto, ResourceDto} from "./resource.api";

@Injectable()
export class ResourceConnector {
    url: string = 'http://localhost:4000/resources';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<ResourceDto[]> {
        return this.http.get<ResourceDto[]>(this.url).pipe(
            map((res: AxiosResponse<ResourceDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<ResourceDto> {
        return this.http.get<ResourceDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<ResourceDto>) => res.data)
        ).toPromise();
    }

    async create(createResourceDto: CreateResourceDto): Promise<ResourceDto> {
        return this.http.post<ResourceDto>(this.url, createResourceDto).pipe(
            map((res: AxiosResponse<ResourceDto>) => res.data)
        ).toPromise();
    }

    async update(id: string, updateResourceDto: UpdateResourceDto): Promise<ResourceDto> {
        return this.http.patch<ResourceDto>(this.getUrl(id), updateResourceDto).pipe(
            map((res: AxiosResponse<ResourceDto>) => res.data)
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
