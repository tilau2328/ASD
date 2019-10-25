import {NgModule} from "@angular/core";
import {ProvidersConnector} from "./providers.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [ProvidersConnector],
})
export class ProvidersConnectorsModule {}
