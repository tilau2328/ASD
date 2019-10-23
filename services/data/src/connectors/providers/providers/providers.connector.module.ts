import {Module} from "@nestjs/common";
import {ProviderConnector} from "./provider.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [ProviderConnector],
    exports: [ProviderConnector],
})
export class ProvidersConnectorModule {}
