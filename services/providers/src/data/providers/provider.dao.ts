import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Provider} from './provider.model';
import { ProviderCreate } from "./provider-create.dto";
import { ProviderUpdate } from "./provider-update.dto";

@Injectable()
export class ProviderDao {
    constructor(@InjectModel('Provider') private readonly providerModel: Model<Provider>) {}

    async list(params?: any): Promise<Provider[]> {
        return this.providerModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<Provider> {
        const provider: Provider = await this.providerModel.findById(id).exec();
        if (!provider) throw Error(`Invalid Id: ${id}`);
        return provider;
    }

    async findByName(name: string): Promise<Provider> {
        const provider: Provider = await this.providerModel.findOne({ name }).exec();
        if (!provider) throw Error(`Invalid Provider: ${name}`);
        return provider;
    }

    async create(providerCreate: ProviderCreate): Promise<Provider> {
        let provider = new this.providerModel(providerCreate);
        return provider.save();
    }

    async update(id: string, providerUpdate: ProviderUpdate): Promise<Provider> {
        const provider: Provider = await this.findById(id);
        if (providerUpdate.hasOwnProperty('name')) provider.name = providerUpdate.name;
        if (providerUpdate.hasOwnProperty('authUrl')) provider.authUrl = providerUpdate.authUrl;
        if (providerUpdate.hasOwnProperty('userUrl')) provider.userUrl = providerUpdate.userUrl;
        if (providerUpdate.hasOwnProperty('tokenUrl')) provider.tokenUrl = providerUpdate.tokenUrl;
        return provider.save();
    }

    async delete(id: string): Promise<Provider> {
        const provider: Provider = await this.providerModel.findById(id);
        await provider.remove();
        return provider;
    }
}
