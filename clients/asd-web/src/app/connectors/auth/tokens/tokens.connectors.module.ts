import {NgModule} from "@angular/core";
import {TokensConnector} from "./tokens.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [TokensConnector],
})
export class TokensConnectorsModule {}
