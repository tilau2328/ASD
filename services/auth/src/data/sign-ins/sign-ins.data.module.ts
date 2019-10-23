import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {SignInSchema} from "./sign-in.schema";
import {SignInDao} from "./sign-in.dao";
import {AppDataModule} from "../app.data.module";

@Module({
    imports: [
        AppDataModule,
        MongooseModule.forFeature([
            { name: 'SignIn', schema: SignInSchema },
        ]),
    ],
    providers: [SignInDao],
    exports: [SignInDao]
})
export class SignInsDataModule {}
