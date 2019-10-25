import {NgModule} from "@angular/core";
import {ResourceService} from "./resource.service";
import {ResourcesConnectorsModule} from "../../../connectors/providers/resources/resources.connectors.module";

@NgModule({
  imports: [ResourcesConnectorsModule],
  providers: [ResourceService],
})
export class ResourceServicesModule {}
