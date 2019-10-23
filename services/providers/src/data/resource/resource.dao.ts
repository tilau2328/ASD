import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Resource} from './resource.model';
import { ResourceCreate } from "./resource-create.dto";
import { ResourceUpdate } from "./resource-update.dto";

@Injectable()
export class ResourceDao {
    constructor(@InjectModel('Resource') private readonly resourceModel: Model<Resource>) {}

    async list(params?: any): Promise<Resource[]> {
        return this.resourceModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<Resource> {
        const resource: Resource = await this.resourceModel.findById(id).exec();
        if (!resource) throw Error(`Invalid Id: ${id}`);
        return resource;
    }

    async create(resourceCreate: ResourceCreate): Promise<Resource> {
        let resource = new this.resourceModel(resourceCreate);
        return resource.save();
    }

    async update(id: string, resourceUpdate: ResourceUpdate): Promise<Resource> {
        const resource: Resource = await this.findById(id);
        if (resourceUpdate.hasOwnProperty('method')) resource.method = resourceUpdate.method;
        if (resourceUpdate.hasOwnProperty('endpoint')) resource.endpoint = resourceUpdate.endpoint;
        if (resourceUpdate.hasOwnProperty('provider')) resource.provider = resourceUpdate.provider;
        if (resourceUpdate.hasOwnProperty('params')) resource.params = resourceUpdate.params;
        if (resourceUpdate.hasOwnProperty('queryParams')) resource.queryParams = resourceUpdate.queryParams;
        if (resourceUpdate.hasOwnProperty('headers')) resource.headers = resourceUpdate.headers;
        return resource.save();
    }

    async delete(id: string): Promise<Resource> {
        const resource: Resource = await this.resourceModel.findById(id);
        await resource.remove();
        return resource;
    }
}
