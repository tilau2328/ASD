import {Module} from "@nestjs/common";
import {TokenConnector} from "./token.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [TokenConnector],
    exports: [TokenConnector],
})
export class TokensConnectorModule {}
