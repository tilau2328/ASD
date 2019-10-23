import {Model} from 'mongoose';
import {SignIn} from "./sign-in.model";
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {SignInCreate} from "./sign-in-create.dto";

@Injectable()
export class SignInDao {
    constructor(@InjectModel('SignIn') private readonly signInModel: Model<SignIn>) {}

    async list(params?: any): Promise<SignIn[]> {
        return this.signInModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<SignIn> {
        const signIn: SignIn = await this.signInModel.findById(id).exec();
        if (!signIn) throw Error(`Invalid Id: ${id}`);
        return signIn;
    }

    async create(signInCreate: SignInCreate): Promise<SignIn> {
        let signIn = new this.signInModel(signInCreate);
        return signIn.save();
    }

    async delete(id: string): Promise<SignIn> {
        const signIn: SignIn = await this.signInModel.findById(id);
        await signIn.remove();
        return signIn;
    }
}
