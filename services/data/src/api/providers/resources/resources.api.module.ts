import {Module} from "@nestjs/common";
import {ResourcesResolver} from "./resources.reducer";
import {ResourcesConnectorModule} from "../../../connectors/providers/resources/resources.connector.module";

@Module({
    imports: [ResourcesConnectorModule],
    providers: [ResourcesResolver],
})
export class ResourcesApiModule {}
