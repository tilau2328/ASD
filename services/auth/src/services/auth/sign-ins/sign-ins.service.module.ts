import {Module} from "@nestjs/common";
import {SignInService} from "./sign-in.service";
import {UsersDataModule} from "../../../data/users/users.data.module";
import {TokensServiceModule} from "../tokens/tokens.service.module";
import {SignInsDataModule} from "../../../data/sign-ins/sign-ins.data.module";
import {ProvidersConnectorModule} from "../../../connectors/providers/providers.connector.module";

@Module({
    imports: [
        UsersDataModule,
        SignInsDataModule,
        TokensServiceModule,
        ProvidersConnectorModule,
    ],
    providers: [SignInService],
    exports: [SignInService],
})
export class SignInsServiceModule {}
