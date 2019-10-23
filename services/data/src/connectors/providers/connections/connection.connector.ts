import {HttpService, Injectable} from "@nestjs/common";
import { AxiosResponse } from "axios";
import {map} from "rxjs/operators";
import {ConnectionDto, CreateConnectionDto} from "./connection.api";

@Injectable()
export class ConnectionConnector {
    url: string = 'http://localhost:4000/connections';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<ConnectionDto[]> {
        return this.http.get<ConnectionDto[]>(this.url).pipe(
            map((res: AxiosResponse<ConnectionDto[]>) => res.data)
        ).toPromise();
    }

    async create(createConnectionDto: CreateConnectionDto): Promise<ConnectionDto> {
        return this.http.post<ConnectionDto>(this.url, createConnectionDto).pipe(
            map((res: AxiosResponse<ConnectionDto>) => res.data)
        ).toPromise();
    }
}
