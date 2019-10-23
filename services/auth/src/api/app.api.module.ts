import {Module} from "@nestjs/common";
import {UsersApiModule} from "./users/users.api.module";
import {ClientsApiModule} from "./clients/clients.api.module";
import {TokensApiModule} from "./auth/tokens/tokens.api.module";
import {SignInsApiModule} from "./auth/sign-ins/sign-ins.api.module";
import {SignUpsApiModule} from "./auth/sign-ups/sign-ups.api.module";

@Module({
    imports: [
        UsersApiModule,
        TokensApiModule,
        SignInsApiModule,
        SignUpsApiModule,
        ClientsApiModule,
    ],
})
export class AppApiModule {}
