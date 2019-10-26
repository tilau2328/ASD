import {Module} from "@nestjs/common";
import {ClientService} from "./client.service";
import {ClientsDataModule} from "../../data/clients/clients.data.module";

@Module({
    imports: [ClientsDataModule],
    providers: [ClientService],
    exports: [ClientService],
})
export class ClientsServiceModule {}
