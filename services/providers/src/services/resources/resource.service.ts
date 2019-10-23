import { Injectable } from "@nestjs/common";
import {Resource} from "../../data/resource/resource.model";
import {ResourceDao} from "../../data/resource/resource.dao";
import {CreateResourceDto, ResourceDto, UpdateResourceDto} from "./resource.dto";

@Injectable()
export class ResourceService {
    constructor(private readonly resourceDao: ResourceDao) {}

    async list(params?: any): Promise<ResourceDto[]> {
        const resources: Resource[] = await this.resourceDao.list(params);
        return resources.map((resource: Resource) => this.toDto(resource));
    }

    async findById(id: string): Promise<ResourceDto> {
        const resource: Resource = await this.resourceDao.findById(id);
        return this.toDto(resource);
    }

    async create(createDto: CreateResourceDto): Promise<ResourceDto> {
        const resource: Resource = await this.resourceDao.create({ ...createDto });
        return this.toDto(resource);
    }

    async update(id: string, updateDto: UpdateResourceDto): Promise<ResourceDto> {
        const resource: Resource = await this.resourceDao.update(id, updateDto);
        return this.toDto(resource);
    }

    async delete(id: string): Promise<string> {
        const resource: Resource = await this.resourceDao.delete(id);
        return resource.id;
    }

    private toDto({ id, name, provider, method, endpoint, params, queryParams, headers }: Resource): ResourceDto {
        return { id, name, provider, method, endpoint, params, queryParams, headers };
    }
}
