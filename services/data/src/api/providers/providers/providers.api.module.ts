import {Module} from "@nestjs/common";
import {ProvidersResolver} from "./providers.reducer";
import {ResourcesApiModule} from "../resources/resources.api.module";
import {ProvisionsApiModule} from "../provisions/provisions.api.module";
import {ConnectionsApiModule} from "../connections/connections.api.module";
import {ProvidersConnectorModule} from "../../../connectors/providers/providers/providers.connector.module";

@Module({
    imports: [
        ProvidersConnectorModule,
        ConnectionsApiModule,
        ProvisionsApiModule,
        ProvidersApiModule,
        ResourcesApiModule,
    ],
    providers: [ProvidersResolver],
})
export class ProvidersApiModule {}
