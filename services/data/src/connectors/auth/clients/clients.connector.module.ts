import {Module} from "@nestjs/common";
import {ClientConnector} from "./client.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [ClientConnector],
    exports: [ClientConnector],
})
export class ClientsConnectorModule {}
