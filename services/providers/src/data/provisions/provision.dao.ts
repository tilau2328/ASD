import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {Provision} from './provision.model';
import {InjectModel} from '@nestjs/mongoose';
import { ProvisionCreate } from "./provision-create.dto";
import { ProvisionUpdate } from "./provision-update.dto";

@Injectable()
export class ProvisionDao {
    constructor(@InjectModel('Provision') private readonly provisionModel: Model<Provision>) {}

    async list(params?: any): Promise<Provision[]> {
        return this.provisionModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<Provision> {
        const provision: Provision = await this.provisionModel.findById(id).exec();
        if (!provision) throw Error(`Invalid Id: ${id}`);
        return provision;
    }

    async findByName(name: string): Promise<Provision> {
        const provision: Provision = await this.provisionModel.findOne({ name }).exec();
        if (!provision) throw Error(`Invalid Provision: ${name}`);
        return provision;
    }

    async create(provisionCreate: ProvisionCreate): Promise<Provision> {
        let provision = new this.provisionModel(provisionCreate);
        return provision.save();
    }

    async update(id: string, provisionUpdate: ProvisionUpdate): Promise<Provision> {
        const provision: Provision = await this.findById(id);
        if (provisionUpdate.hasOwnProperty('scope')) provision.scope = provisionUpdate.scope;
        if (provisionUpdate.hasOwnProperty('clientId')) provision.clientId = provisionUpdate.clientId;
        if (provisionUpdate.hasOwnProperty('clientSecret')) provision.clientSecret = provisionUpdate.clientSecret;
        return provision.save();
    }

    async delete(id: string): Promise<Provision> {
        const provision: Provision = await this.provisionModel.findById(id);
        await provision.remove();
        return provision;
    }
}
