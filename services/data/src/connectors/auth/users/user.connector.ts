import {HttpService, Injectable} from "@nestjs/common";
import {map} from "rxjs/operators";
import { AxiosResponse } from "axios";
import {UserDto, CreateUserDto, UpdateUserDto} from "./user.api";

@Injectable()
export class UserConnector {
    url: string = 'http://localhost:3000/users';

    constructor(private readonly http: HttpService) {}

    async list(params?: any): Promise<UserDto[]> {
        return this.http.get<UserDto[]>(this.url).pipe(
            map((res: AxiosResponse<UserDto[]>) => res.data)
        ).toPromise();
    }

    async get(id: string): Promise<UserDto> {
        return this.http.get<UserDto>(this.getUrl(id)).pipe(
            map((res: AxiosResponse<UserDto>) => res.data)
        ).toPromise();
    }

    async create(createUserDto: CreateUserDto): Promise<UserDto> {
        return this.http.post<UserDto>(this.url, createUserDto).pipe(
            map((res: AxiosResponse<UserDto>) => res.data)
        ).toPromise();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
        return this.http.patch<UserDto>(this.getUrl(id), updateUserDto).pipe(
            map((res: AxiosResponse<UserDto>) => res.data)
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
