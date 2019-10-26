import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ResourceFormComponent} from "./resource.form.component";
import {ResourceListComponent} from "./resource.list.component";
import {ResourceModalComponent} from "./resource.modal.component";
import {ResourceServicesModule} from "../../../services/providers/resources/resource.services.module";

@NgModule({
  imports: [
    SharedModule,
    ResourceServicesModule,
  ],
  declarations: [
    ResourceFormComponent,
    ResourceListComponent,
    ResourceModalComponent,
  ],
  exports: [
    ResourceFormComponent,
    ResourceListComponent,
    ResourceModalComponent,
  ],
  bootstrap: [
    ResourceModalComponent,
  ]
})
export class ResourceComponentModule {}
