import {Module} from "@nestjs/common";
import {ClientController} from "./client.controller";
import {ClientsServiceModule} from "../../services/clients/clients.service.module";

@Module({
    imports: [ClientsServiceModule],
    controllers: [ClientController],
})
export class ClientsApiModule {}
