import {Model} from 'mongoose';
import {Token} from "./token.model";
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { TokenCreate } from './token-create.dto';

@Injectable()
export class TokenDao {
    constructor(@InjectModel('Token') private readonly tokenModel: Model<Token>) {}

    async list(params?: any): Promise<Token[]> {
        return this.tokenModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<Token> {
        const token: Token = await this.tokenModel.findById(id).exec();
        if (!token) throw Error(`Invalid Id: ${id}`);
        return token;
    }

    async findByRefreshToken(refreshToken: string): Promise<Token> {
        const token: Token = await this.tokenModel.findOne({ refreshToken }).exec();
        if (!token) throw Error(`Invalid Refresh Token: ${refreshToken}`);
        return token;
    }

    async create(createTokenDto: TokenCreate): Promise<Token> {
        let token = new this.tokenModel(createTokenDto);
        return token.save();
    }

    async delete(id: string): Promise<Token> {
        const token: Token = await this.tokenModel.findById(id);
        await token.remove();
        return token;
    }
}
