import {HttpService, Injectable} from "@nestjs/common";
import {ConnectionDto, CreateConnectionDto, UpdateConnectionDto} from "./connection.api";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";

@Injectable()
export class ConnectionConnector {
    url: string = 'http://localhost:4000/connections';

    constructor(private readonly http: HttpService) {}

    async createConnection(createConnectionDto: CreateConnectionDto): Promise<ConnectionDto> {
        return this.http.post<ConnectionDto>(this.url, createConnectionDto).pipe(
            map((res: AxiosResponse<ConnectionDto>) => res.data)
        ).toPromise();
    }

    async updateConnection(updateConnectionDto: UpdateConnectionDto): Promise<ConnectionDto> {
        return this.http.patch<ConnectionDto>(this.url, updateConnectionDto).pipe(
            map((res: AxiosResponse<ConnectionDto>) => res.data)
        ).toPromise();
    }
}
