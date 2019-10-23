import {Module} from "@nestjs/common";
import {SignInConnector} from "./sign-in.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [SignInConnector],
    exports: [SignInConnector],
})
export class SignInsConnectorModule {}
