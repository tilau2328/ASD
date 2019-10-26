import {NgModule} from "@angular/core";
import {clientRoutes} from "./client.routes";
import {RouterModule} from "@angular/router";
import {ClientPageComponent} from "./client.page.component";
import {ClientsPageComponent} from "./clients.page.component";
import {ProvisionPageComponent} from "./provision.page.component";
import {ClientComponentModule} from "../../../../components/clients/client.component.module";
import {ProvisionComponentModule} from "../../../../components/providers/provisions/provision.component.module";

@NgModule({
  imports: [
    ClientComponentModule,
    ProvisionComponentModule,
    RouterModule.forChild(clientRoutes),
  ],
  declarations: [
    ClientPageComponent,
    ClientsPageComponent,
    ProvisionPageComponent,
  ],
})
export class ClientViewsModule {}
