import {NgModule} from "@angular/core";
import {ClientService} from "./client.service";
import {ClientsConnectorsModule} from "../../../connectors/auth/clients/clients.connectors.module";

@NgModule({
  imports: [ClientsConnectorsModule],
  providers: [ClientService],
})
export class ClientServicesModule {}
