import {Module} from "@nestjs/common";
import {ProvisionConnector} from "./provision.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [ProvisionConnector],
    exports: [ProvisionConnector],
})
export class ProvisionsConnectorModule {}
