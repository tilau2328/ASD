import {NgModule} from "@angular/core";
import {SignUpsConnector} from "./sign-ups.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [SignUpsConnector],
})
export class SignUpsConnectorsModule {}
