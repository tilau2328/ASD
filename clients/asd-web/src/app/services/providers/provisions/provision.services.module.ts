import {NgModule} from "@angular/core";
import {ProvisionService} from "./provision.service";
import {ProvisionsConnectorsModule} from "../../../connectors/providers/provisions/provisions.connectors.module";

@NgModule({
  imports: [ProvisionsConnectorsModule],
  providers: [ProvisionService],
})
export class ProvisionServicesModule {}
