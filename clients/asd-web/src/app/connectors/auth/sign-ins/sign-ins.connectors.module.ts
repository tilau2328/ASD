import {NgModule} from "@angular/core";
import {SignInsConnector} from "./sign-ins.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [SignInsConnector],
})
export class SignInsConnectorsModule {}
