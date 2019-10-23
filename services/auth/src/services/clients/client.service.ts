import { Injectable } from "@nestjs/common";
import {ClientDao} from "../../data/clients/client.dao";
import {Client} from "../../data/clients/client.model";
import {ClientDto, CreateClientDto, UpdateClientDto} from "./client.dto";

@Injectable()
export class ClientService {
    constructor(private readonly clientDao: ClientDao) {}

    async list(params?: any): Promise<ClientDto[]> {
        const clients: Client[] = await this.clientDao.list(params);
        return clients.map((client: Client) => this.toDto(client));
    }

    async findById(id: string): Promise<ClientDto> {
        const client: Client = await this.clientDao.findById(id);
        return this.toDto(client);
    }

    async create(createDto: CreateClientDto): Promise<ClientDto> {
        const client: Client = await this.clientDao.create(createDto);
        return this.toDto(client);
    }

    async update(id: string, updateDto: UpdateClientDto): Promise<ClientDto> {
        const client: Client = await this.clientDao.update(id, updateDto);
        return this.toDto(client);
    }

    async delete(id: string): Promise<string> {
        const client: Client = await this.clientDao.delete(id);
        return client.id;
    }

    private toDto({ id, name, scope, clientId, clientSecret }: Client): ClientDto {
        return { id, name, scope, clientId, clientSecret };
    }
}
