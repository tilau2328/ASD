import { Injectable } from "@nestjs/common";
import { Provision } from "src/data/provisions/provision.model";
import { ProvisionDao } from "src/data/provisions/provision.dao";
import {CreateProvisionDto, ProvisionDto, UpdateProvisionDto} from "./provision.dto";

@Injectable()
export class ProvisionService {
    constructor(private readonly provisionDao: ProvisionDao) {}

    async list(params?: any): Promise<ProvisionDto[]> {
        const provisions: Provision[] = await this.provisionDao.list(params);
        return provisions.map((provision: Provision) => this.toDto(provision));
    }

    async findById(id: string): Promise<ProvisionDto> {
        const provision: Provision = await this.provisionDao.findById(id);
        return this.toDto(provision);
    }

    async findByName(name: string): Promise<ProvisionDto> {
        const provision: Provision = await this.provisionDao.findByName(name);
        return this.toDto(provision);
    }

    async create(createDto: CreateProvisionDto): Promise<ProvisionDto> {
        const provision: Provision = await this.provisionDao.create({ ...createDto });
        return this.toDto(provision);
    }

    async update(id: string, updateDto: UpdateProvisionDto): Promise<ProvisionDto> {
        const provision: Provision = await this.provisionDao.update(id, updateDto);
        return this.toDto(provision);
    }

    async delete(id: string): Promise<string> {
        const provision: Provision = await this.provisionDao.delete(id);
        return provision.id;
    }

    private toDto({ id, name, provider, client, scope, clientId, clientSecret }: Provision): ProvisionDto {
        return { id, name, provider, client, scope, clientId, clientSecret };
    }
}
