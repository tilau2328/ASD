import {NgModule} from "@angular/core";
import {ConnectionService} from "./connection.service";
import {ConnectionsConnectorsModule} from "../../../connectors/providers/connections/connections.connectors.module";

@NgModule({
  imports: [ConnectionsConnectorsModule],
  providers: [ConnectionService],
})
export class ConnectionServicesModule {}
