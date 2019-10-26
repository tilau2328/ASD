import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {providerRoutes} from "./provider.routes";
import {ResourcePageComponent} from "./resource.page.component";
import {ProviderPageComponent} from "./provider.page.component";
import {ProvidersPageComponent} from "./providers.page.component";
import {ProviderComponentModule} from "../../../../components/providers/providers/provider.component.module";
import {ResourceComponentModule} from "../../../../components/providers/resources/resource.component.module";

@NgModule({
  imports: [
    ProviderComponentModule,
    ResourceComponentModule,
    RouterModule.forChild(providerRoutes),
  ],
  declarations: [
    ResourcePageComponent,
    ProviderPageComponent,
    ProvidersPageComponent,
  ],
})
export class ProviderViewsModule {}
