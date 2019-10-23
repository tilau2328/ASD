import {Module} from "@nestjs/common";
import {ConnectionsResolver} from "./connections.reducer";
import {ConnectionsConnectorModule} from "../../../connectors/providers/connections/connections.connector.module";

@Module({
    imports: [ConnectionsConnectorModule],
    providers: [ConnectionsResolver],
})
export class ConnectionsApiModule {}
