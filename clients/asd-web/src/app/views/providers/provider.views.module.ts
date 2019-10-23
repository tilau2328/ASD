import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ProviderRoutingModule} from "./provider.routing.module";
import {ProviderPageComponent} from "./pages/provider.page.component";
import {ProviderModule} from "../../modules/providers/provider.module";
import {ProvidersPageComponent} from "./pages/providers.page.component";
import {ProviderModalComponent} from "./components/provider.modal.component";
import {ConnectButtonComponent} from "./components/connect.button.component";

@NgModule({
  imports: [
    SharedModule,
    ProviderModule,
    ProviderRoutingModule,
  ],
  declarations: [
    ProviderPageComponent,
    ProvidersPageComponent,
    ProviderModalComponent,
    ConnectButtonComponent,
  ],
  bootstrap: [
    ProviderModalComponent,
  ],
  exports: [
    ConnectButtonComponent,
  ]
})
export class ProviderViewsModule {}
