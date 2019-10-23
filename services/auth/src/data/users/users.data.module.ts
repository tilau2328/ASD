import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./user.schema";
import {UserDao} from "./user.dao";
import {AppDataModule} from "../app.data.module";

@Module({
    imports: [
        AppDataModule,
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
        ]),
    ],
    providers: [UserDao],
    exports: [UserDao]
})
export class UsersDataModule {}
