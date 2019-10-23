import {Module} from "@nestjs/common";
import {SignUpConnector} from "./sign-up.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [SignUpConnector],
    exports: [SignUpConnector],
})
export class SignUpsConnectorModule {}
