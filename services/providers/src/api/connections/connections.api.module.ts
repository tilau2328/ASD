import {Module} from "@nestjs/common";
import {ConnectionController} from "./connection.controller";
import {ConnectionsServiceModule} from "../../services/connections/connections.service.module";

@Module({
    imports: [ConnectionsServiceModule],
    controllers: [ConnectionController]
})
export class ConnectionsApiModule {}
