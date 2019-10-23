import {Module} from "@nestjs/common";
import {AppConnectorModule} from "../../app.connector.module";
import {ConnectionConnector} from "./connection.connector";

@Module({
    imports: [AppConnectorModule],
    providers: [ConnectionConnector],
    exports: [ConnectionConnector],
})
export class ConnectionsConnectorModule {}
