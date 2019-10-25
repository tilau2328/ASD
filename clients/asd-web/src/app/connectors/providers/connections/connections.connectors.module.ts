import {NgModule} from "@angular/core";
import {ConnectionsConnector} from "./connections.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [ConnectionsConnector],
})
export class ConnectionsConnectorsModule {}
