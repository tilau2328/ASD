import {Module} from "@nestjs/common";
import {ClientsResolver} from "./clients.reducer";
import {ClientsConnectorModule} from "../../../connectors/auth/clients/clients.connector.module";

@Module({
    imports: [ClientsConnectorModule],
    providers: [ClientsResolver],
})
export class ClientsApiModule {}
