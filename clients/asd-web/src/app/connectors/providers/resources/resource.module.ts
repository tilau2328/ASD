import {NgModule} from "@angular/core";
import {ResourceService} from "./resource.service";
import {ResourceConnector} from "./resource.connector";

@NgModule({
  providers: [
    ResourceService,
    ResourceConnector,
  ],
})
export class ResourceModule {}
