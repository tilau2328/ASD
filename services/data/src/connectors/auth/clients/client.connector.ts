import {HttpService, Injectable} from "@nestjs/common";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";
import {ClientDto, CreateClientDto, UpdateClientDto} from "./client.api";

@Injectable()
export class ClientConnector {
    url: string = 'http://localhost:3000/clients';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<ClientDto[]> {
        return this.http.get<ClientDto[]>(this.url).pipe(
            map((res: AxiosResponse<ClientDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<ClientDto> {
        return this.http.get<ClientDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<ClientDto>) => res.data)
        ).toPromise();
    }

    async create(createClientDto: CreateClientDto): Promise<ClientDto> {
        return this.http.post<ClientDto>(this.url, createClientDto).pipe(
            map((res: AxiosResponse<ClientDto>) => res.data)
        ).toPromise();
    }

    async update(id: string, updateClientDto: UpdateClientDto): Promise<ClientDto> {
        return this.http.patch<ClientDto>(this.getUrl(id), updateClientDto).pipe(
            map((res: AxiosResponse<ClientDto>) => res.data)
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
