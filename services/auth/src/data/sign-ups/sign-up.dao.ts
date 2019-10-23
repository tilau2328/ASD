import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {SignUp} from "./sign-up.model";
import {SignUpCreate} from "./sign-up-create.dto";

@Injectable()
export class SignUpDao {
    constructor(@InjectModel('SignUp') private readonly signUpModel: Model<SignUp>) {}

    async list(params?: any): Promise<SignUp[]> {
        return this.signUpModel.find(params ? params : null).exec();
    }

    async findById(id: string): Promise<SignUp> {
        const signUp: SignUp = await this.signUpModel.findById(id).exec();
        if (!signUp) throw Error(`Invalid Id: ${id}`);
        return signUp;
    }

    async create(signUpCreate: SignUpCreate): Promise<SignUp> {
        let signUp = new this.signUpModel(signUpCreate);
        return signUp.save();
    }

    async delete(id: string): Promise<SignUp> {
        const signUp: SignUp = await this.signUpModel.findById(id);
        await signUp.remove();
        return signUp;
    }
}
