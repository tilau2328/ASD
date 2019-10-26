import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ClientRoutesModule} from "./client.routes.module";
import {ClientPageComponent} from "./pages/client.page.component";
import {ClientsPageComponent} from "./pages/clients.page.component";
import {ProvisionPageComponent} from "./pages/provision.page.component";
import {ClientModalComponent} from "./components/client.modal.component";
import {ProvisionModalComponent} from "./components/provision.modal.component";
import {ClientServicesModule} from "../../../services/auth/clients/client.services.module";
import {ProvisionServicesModule} from "../../../services/providers/provisions/provision.services.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ClientRoutesModule,
    ClientServicesModule,
    ProvisionServicesModule,
  ],
  declarations: [
    ClientPageComponent,
    ClientsPageComponent,
    ClientModalComponent,
    ProvisionPageComponent,
    ProvisionModalComponent,
  ],
  bootstrap: [
    ClientModalComponent,
    ProvisionModalComponent,
  ],
})
export class ClientViewsModule {}
