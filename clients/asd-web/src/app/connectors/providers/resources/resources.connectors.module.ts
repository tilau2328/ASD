import {NgModule} from "@angular/core";
import {ResourcesConnector} from "./resources.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [ResourcesConnector],
})
export class ResourcesConnectorsModule {}
