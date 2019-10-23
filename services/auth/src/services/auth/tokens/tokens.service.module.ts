import {Module} from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";
import {TokenService} from "./token.service";
import {TokensDataModule} from "../../../data/tokens/tokens.data.module";

@Module({
    imports: [
        TokensDataModule,
        JwtModule.register({
            secret: "secret",
        }),
    ],
    providers: [TokenService],
    exports: [TokenService],
})
export class TokensServiceModule {}
