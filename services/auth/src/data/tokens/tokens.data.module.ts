import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {TokenSchema} from "./token.schema";
import {TokenDao} from "./token.dao";
import {AppDataModule} from "../app.data.module";

@Module({
    imports: [
        AppDataModule,
        MongooseModule.forFeature([
            { name: 'Token', schema: TokenSchema },
        ]),
    ],
    providers: [TokenDao],
    exports: [TokenDao]
})
export class TokensDataModule {}
