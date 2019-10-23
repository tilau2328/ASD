import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Connection} from './connection.model';
import { ConnectionCreate } from './connection-create.dto';
import { ConnectionUpdate } from './connection-update.dto';

@Injectable()
export class ConnectionDao {
    constructor(@InjectModel('Connection') private readonly connectionModel: Model<Connection>) {}

    async list(params?: any): Promise<Connection[]> {
        return this.connectionModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<Connection> {
        const connection: Connection = await this.connectionModel.findById(id).exec();
        if (!connection) throw Error(`Invalid Id: ${id}`);
        return connection;
    }

    async findByProviderAndRemoteUser(provider: string, user: string): Promise<Connection> {
        return this.connectionModel.findOne({ user, provider }).exec();
    }

    async create(connectionCreate: ConnectionCreate): Promise<Connection> {
        let connection = new this.connectionModel(connectionCreate);
        return connection.save();
    }

    async update(id: string, connectionUpdate: ConnectionUpdate): Promise<Connection> {
        const connection: Connection = await this.findById(id);
        if (connectionUpdate.hasOwnProperty('remoteId')) connection.remoteId = connectionUpdate.remoteId;
        if (connectionUpdate.hasOwnProperty('token')) connection.token = connectionUpdate.token;
        if (connectionUpdate.hasOwnProperty('scope')) connection.token = connectionUpdate.token;
        return connection.save();
    }

    async delete(id: string): Promise<Connection> {
        const connection: Connection = await this.connectionModel.findById(id);
        await connection.remove();
        return connection;
    }
}
