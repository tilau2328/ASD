import {Module} from "@nestjs/common";
import {ResourceConnector} from "./resource.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [ResourceConnector],
    exports: [ResourceConnector],
})
export class ResourcesConnectorModule {}
