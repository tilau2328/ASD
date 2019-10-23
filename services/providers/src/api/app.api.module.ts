import {Module} from "@nestjs/common";
import {ProvidersApiModule} from "./providers/providers.api.module";
import {ProvisionsApiModule} from "./provisions/provisions.api.module";
import {ConnectionsApiModule} from "./connections/connections.api.module";
import {ResourcesApiModule} from "./resources/resources.api.module";

@Module({
    imports: [
        ResourcesApiModule,
        ProvidersApiModule,
        ProvisionsApiModule,
        ConnectionsApiModule,
    ],
})
export class AppApiModule {}
