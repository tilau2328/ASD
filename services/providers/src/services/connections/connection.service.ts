import { AxiosResponse } from "axios";
import {HttpService, Injectable} from "@nestjs/common";
import {ProviderDto} from "../providers/provider.dto";
import {ProviderService} from "../providers/provider.service";
import {Connection} from "../../data/connections/connection.model";
import {ConnectionDao} from "../../data/connections/connection.dao";
import {ConnectionDto, CreateConnectionDto, RemoteTokenDto, RemoteUserDto, UpdateConnectionDto} from "./connection.dto";

@Injectable()
export class ConnectionService {
    constructor(
        private readonly providerService: ProviderService,
        private readonly connectionDao: ConnectionDao,
        private readonly httpService: HttpService,
    ) {}

    async list(params?: any): Promise<ConnectionDto[]> {
        const connections: Connection[] = await this.connectionDao.list(params);
        return connections.map((connection: Connection) => this.toDto(connection));
    }

    async findById(id: string): Promise<ConnectionDto> {
        const connection: Connection = await this.connectionDao.findById(id);
        return this.toDto(connection);
    }

    async create({ user, provider, code, state }: CreateConnectionDto): Promise<ConnectionDto> {
        const { remoteId, token: { accessToken, scope} }: RemoteUserDto
            = await this.authenticateUser(provider, code, state);
        let connection: Connection = await this.connectionDao.findByProviderAndRemoteUser(provider, remoteId);
        if (connection) { throw Error('Connection already exists'); }
        return this.connectionDao.create({ user, provider, remoteId, scope, token: accessToken });
    }

    async update({ provider, code, state }: UpdateConnectionDto): Promise<ConnectionDto> {
        const { remoteId, token: { accessToken, scope } }: RemoteUserDto
            = await this.authenticateUser(provider, code, state);
        let connection: Connection = await this.connectionDao.findByProviderAndRemoteUser(provider, remoteId);
        if (!connection) { throw Error('Connection does not exists'); }
        return this.connectionDao.update(connection.id, { remoteId, scope, token: accessToken });
    }

    async delete(id: string): Promise<string> {
        const connection: Connection = await this.connectionDao.delete(id);
        return connection.id;
    }

    async authenticateUser(provider: string, code: string, state: string): Promise<RemoteUserDto> {
        const { tokenUrl, userUrl }: ProviderDto = await this.providerService.findByName(provider);
        const { accessToken, scope }: RemoteTokenDto = await this.getToken(tokenUrl, code, state);
        const user: RemoteUserDto = await this.getUser(userUrl, accessToken);
        return { ...user, token: { accessToken, scope } }
    }

    async getToken(authUrl: string, code: string, state: string): Promise<RemoteTokenDto> {
        const response: AxiosResponse<any> = await this.httpService.post(authUrl, { code, state }, {
            headers: { 'Accept': 'application/json' }
        }).toPromise();
        console.log(response);
        const { data: { accessToken, scope } } = response;
        return { accessToken, scope };
    }

    async getUser(userUrl: string, token: string): Promise<RemoteUserDto> {
        const response: AxiosResponse<any> = await this.httpService.get(userUrl, {
            headers: { 'Authorization': `token ${token}` }
        }).toPromise();
        const { data: { avatarUrl, login, email } } = response;
        return { remoteId: login, avatarUrl, email };
    }

    private toDto({ id, provider, token, remoteId, user, scope }: Connection): ConnectionDto {
        return { id, provider, token, remoteId, user, scope };
    }
}
