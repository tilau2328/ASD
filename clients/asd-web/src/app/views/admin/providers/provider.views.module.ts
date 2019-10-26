import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ProviderRoutingModule} from "./provider.routing.module";
import {ResourcePageComponent} from "./pages/resource.page.component";
import {ProviderPageComponent} from "./pages/provider.page.component";
import {ProvidersPageComponent} from "./pages/providers.page.component";
import {ProviderModalComponent} from "./components/provider.modal.component";
import {ConnectButtonComponent} from "./components/connect.button.component";
import {ResourceModalComponent} from "./components/resource.modal.component";
import {ResourceServicesModule} from "../../../services/providers/resources/resource.services.module";
import {ProviderServicesModule} from "../../../services/providers/providers/provider.services.module";
import {ConnectionServicesModule} from "../../../services/providers/connections/connection.services.module";
import {ResourceListComponent} from "./components/resource.list.component";
import {ProviderListComponent} from "./components/provider.list.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ProviderRoutingModule,
    ResourceServicesModule,
    ProviderServicesModule,
    ConnectionServicesModule,
  ],
  declarations: [
    ResourceListComponent,
    ResourcePageComponent,
    ProviderListComponent,
    ProviderPageComponent,
    ProvidersPageComponent,
    ResourceModalComponent,
    ProviderModalComponent,
    ConnectButtonComponent,
  ],
  bootstrap: [
    ResourceModalComponent,
    ProviderModalComponent,
  ],
  exports: [
    ConnectButtonComponent,
  ]
})
export class ProviderViewsModule {}
