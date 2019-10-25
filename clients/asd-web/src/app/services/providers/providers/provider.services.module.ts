import {NgModule} from "@angular/core";
import {ProviderService} from "./provider.service";
import {ProvidersConnectorsModule} from "../../../connectors/providers/providers/providers.connectors.module";

@NgModule({
  imports: [ProvidersConnectorsModule],
  providers: [ProviderService],
})
export class ProviderServicesModule {}
