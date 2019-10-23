import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {SignUpSchema} from "./sign-up.schema";
import {SignUpDao} from "./sign-up.dao";
import {AppDataModule} from "../app.data.module";

@Module({
    imports: [
        AppDataModule,
        MongooseModule.forFeature([
            { name: 'SignUp', schema: SignUpSchema },
        ]),
    ],
    providers: [SignUpDao],
    exports: [SignUpDao]
})
export class SignUpsDataModule {}
