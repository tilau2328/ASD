import {NgModule} from "@angular/core";
import {UsersConnector} from "./users.connector";
import {ConnectorsModule} from "../../connectors.module";

@NgModule({
  imports: [ConnectorsModule],
  providers: [UsersConnector],
})
export class UsersConnectorsModule {}
