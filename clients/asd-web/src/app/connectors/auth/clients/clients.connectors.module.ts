import {NgModule} from "@angular/core";
import {ClientsConnector} from "./clients.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [ClientsConnector],
})
export class ClientsConnectorsModule {}
