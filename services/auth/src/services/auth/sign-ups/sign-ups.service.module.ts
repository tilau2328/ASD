import {Module} from "@nestjs/common";
import {SignUpService} from "./sign-up.service";
import {TokensServiceModule} from "../tokens/tokens.service.module";
import {UsersServiceModule} from "../../users/users.service.module";
import {SignUpsDataModule} from "../../../data/sign-ups/sign-ups.data.module";
import {ProvidersConnectorModule} from "../../../connectors/providers/providers.connector.module";

@Module({
    imports: [
        SignUpsDataModule,
        UsersServiceModule,
        TokensServiceModule,
        ProvidersConnectorModule,
    ],
    providers: [SignUpService],
    exports: [SignUpService],
})
export class SignUpsServiceModule {}
