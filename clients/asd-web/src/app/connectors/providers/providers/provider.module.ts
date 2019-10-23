import {NgModule} from "@angular/core";
import {ProviderService} from "./provider.service";
import {ProviderConnector} from "./provider.connector";

@NgModule({
  providers: [
    ProviderService,
    ProviderConnector,
  ],
})
export class ProviderModule {}
