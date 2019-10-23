import {ConnectionService} from "./connection.service";
import {Module, HttpModule, forwardRef} from "@nestjs/common";
import {ProvidersServiceModule} from "../providers/providers.services.module";
import {ConnectionsDataModule} from "../../data/connections/connections.data.module";

@Module({
    imports: [
        HttpModule,
        ConnectionsDataModule,
        ProvidersServiceModule,
    ],
    providers: [ConnectionService],
    exports: [ConnectionService],
})
export class ConnectionsServiceModule {}
