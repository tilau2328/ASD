import { Injectable } from "@nestjs/common";
import {Provider} from "../../data/providers/provider.model";
import {ProviderDao} from "../../data/providers/provider.dao";
import {CreateProviderDto, ProviderDto, UpdateProviderDto} from "./provider.dto";

@Injectable()
export class ProviderService {
    constructor(private readonly providerDao: ProviderDao) {}

    async list(params?: any): Promise<ProviderDto[]> {
        const providers: Provider[] = await this.providerDao.list(params);
        return providers.map((provider: Provider) => this.toDto(provider));
    }

    async findById(id: string): Promise<ProviderDto> {
        const provider: Provider = await this.providerDao.findById(id);
        return this.toDto(provider);
    }

    async findByName(name: string): Promise<ProviderDto> {
        const provider: Provider = await this.providerDao.findByName(name);
        return this.toDto(provider);
    }

    async create(createDto: CreateProviderDto): Promise<ProviderDto> {
        const provider: Provider = await this.providerDao.create({ ...createDto });
        return this.toDto(provider);
    }

    async update(id: string, updateDto: UpdateProviderDto): Promise<ProviderDto> {
        const provider: Provider = await this.providerDao.update(id, updateDto);
        return this.toDto(provider);
    }

    async delete(id: string): Promise<string> {
        const provider: Provider = await this.providerDao.delete(id);
        return provider.id;
    }

    private toDto({ id, name, userUrl, authUrl, tokenUrl }: Provider): ProviderDto {
        return { id, name, userUrl: userUrl, authUrl, tokenUrl };
    }
}
