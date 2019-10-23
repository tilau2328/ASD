import { Schema } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import {User} from "./user.model";

export const UserSchema = new Schema({
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: { type: String, required: true },
    avatarUrl: { type: String },
});

UserSchema.pre("save", function(next) {
    const self = this as User;
    if(this.isModified("password"))
        self.password = bcrypt.hashSync(self.password, 10);
    next();
});

UserSchema.methods.comparePassword = function(password: string): boolean {
    return bcrypt.compare(password, this.password);
};
