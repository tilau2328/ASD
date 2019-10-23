import {Model} from "mongoose";
import {User} from "./user.model";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { UserCreate } from "./user-create.dto";
import { UserUpdate } from "./user-update.dto";

@Injectable()
export class UserDao {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async list(params?: any): Promise<User[]> {
        return this.userModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<User> {
        const user: User = await this.userModel.findById(id).exec();
        if (!user) throw Error(`Invalid Id: ${id}`);
        return user;
    }

    async findByUsername(username: string): Promise<User> {
        return this.userModel.findOne({ username }).exec();
    }

    async create(userCreate: UserCreate): Promise<User> {
        let user = new this.userModel(userCreate);
        return user.save();
    }

    async update(id: string, updateUser: UserUpdate): Promise<User> {
        const user: User = await this.findById(id);
        if (updateUser.hasOwnProperty('email')) user.email = updateUser.email;
        if (updateUser.hasOwnProperty('username')) user.username = updateUser.username;
        if (updateUser.hasOwnProperty('password')) user.password = updateUser.password;
        if (updateUser.hasOwnProperty('avatarUrl')) user.avatarUrl = updateUser.avatarUrl;
        return user.save();
    }

    async delete(id: string): Promise<User> {
        const user: User = await this.userModel.findById(id);
        await user.remove();
        return user;
    }
}
