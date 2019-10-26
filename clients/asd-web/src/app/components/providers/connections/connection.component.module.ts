import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ConnectButtonComponent} from "./connect.button.component";
import {ProviderServicesModule} from "../../../services/providers/providers/provider.services.module";
import {ConnectionServicesModule} from "../../../services/providers/connections/connection.services.module";

@NgModule({
  imports: [
    SharedModule,
    ProviderServicesModule,
    ConnectionServicesModule,
  ],
  declarations: [
    ConnectButtonComponent,
  ],
  exports: [
    ConnectButtonComponent,
  ],
})
export class ConnectionComponentModule {}
