import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ProviderListComponent} from "./provider.list.component";
import {ProviderModalComponent} from "./provider.modal.component";
import {ProviderServicesModule} from "../../../services/providers/providers/provider.services.module";

@NgModule({
  imports: [
    SharedModule,
    ProviderServicesModule,
  ],
  declarations: [
    ProviderListComponent,
    ProviderModalComponent,
  ],
  exports: [
    ProviderListComponent,
    ProviderModalComponent,
  ],
  bootstrap: [
    ProviderModalComponent,
  ]
})
export class ProviderComponentModule {}
