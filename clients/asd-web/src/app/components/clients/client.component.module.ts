import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ClientListComponent} from "./client.list.component";
import { ClientModalComponent } from './client.modal.component';
import {ClientServicesModule} from "../../services/auth/clients/client.services.module";

@NgModule({
  imports: [
    SharedModule,
    ClientServicesModule,
  ],
  declarations: [
    ClientListComponent,
    ClientModalComponent,
  ],
  exports: [
    ClientListComponent,
    ClientModalComponent,
  ],
  bootstrap: [
    ClientModalComponent,
  ]
})
export class ClientComponentModule {}
