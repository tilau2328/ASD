import {Module} from "@nestjs/common";
import {ProvisionsResolver} from "./provisions.reducer";
import {ProvisionsConnectorModule} from "../../../connectors/providers/provisions/provisions.connector.module";

@Module({
    imports: [ProvisionsConnectorModule],
    providers: [ProvisionsResolver],
})
export class ProvisionsApiModule {}
