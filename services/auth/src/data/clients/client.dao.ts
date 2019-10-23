import {Model} from "mongoose";
import {Client} from "./client.model";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { ClientCreate } from "./client-create.dto";
import { ClientUpdate } from "./client-update.dto";

@Injectable()
export class ClientDao {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) {}

    async list(params?: any): Promise<Client[]> {
        return this.clientModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<Client> {
        const client: Client = await this.clientModel.findById(id).exec();
        if (!client) throw Error(`Invalid Id: ${id}`);
        return client;
    }

    async create(clientCreate: ClientCreate): Promise<Client> {
        let client = new this.clientModel(clientCreate);
        return client.save();
    }

    async update(id: string, updateClient: ClientUpdate): Promise<Client> {
        const client: Client = await this.findById(id);
        if (updateClient.hasOwnProperty('name')) client.name = updateClient.name;
        if (updateClient.hasOwnProperty('scope')) client.scope = updateClient.scope;
        if (updateClient.hasOwnProperty('clientId')) client.clientId = updateClient.clientId;
        if (updateClient.hasOwnProperty('clientSecret')) client.clientSecret = updateClient.clientSecret;
        return client.save();
    }

    async delete(id: string): Promise<Client> {
        const client: Client = await this.clientModel.findById(id);
        await client.remove();
        return client;
    }
}
