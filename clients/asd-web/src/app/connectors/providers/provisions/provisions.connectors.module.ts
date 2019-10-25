import {NgModule} from "@angular/core";
import {ProvisionsConnector} from "./provisions.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [ProvisionsConnector],
})
export class ProvisionsConnectorsModule {}
