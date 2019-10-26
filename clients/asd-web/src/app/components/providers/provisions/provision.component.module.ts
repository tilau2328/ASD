import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ProvisionListComponent} from "./provision.list.component";
import {ProvisionModalComponent} from "./provision.modal.component";
import {ProvisionServicesModule} from "../../../services/providers/provisions/provision.services.module";

@NgModule({
  imports: [
    SharedModule,
    ProvisionServicesModule,
  ],
  declarations: [
    ProvisionListComponent,
    ProvisionModalComponent,
  ],
  exports: [
    ProvisionListComponent,
    ProvisionModalComponent,
  ],
  bootstrap: [
    ProvisionModalComponent,
  ]
})
export class ProvisionComponentModule {}
