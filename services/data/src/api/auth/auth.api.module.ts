import {Module} from "@nestjs/common";
import {UsersApiModule} from "./users/users.api.module";
import {TokensApiModule} from "./tokens/tokens.api.module";
import {ClientsApiModule} from "./clients/clients.api.module";
import {SignInsApiModule} from "./sign-ins/sign-ins.api.module";
import {SignUpsApiModule} from "./sign-ups/sign-ups.api.module";

@Module({
    imports: [
        UsersApiModule,
        TokensApiModule,
        SignInsApiModule,
        SignUpsApiModule,
        ClientsApiModule
    ],
})
export class AuthApiModule {}
