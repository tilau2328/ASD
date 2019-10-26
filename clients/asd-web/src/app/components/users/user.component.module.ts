import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {UserModalComponent} from "./user.modal.component";
import {UserBadgeComponent} from "./user.badge.component";
import {UserServicesModule} from "../../services/auth/users/user.services.module";

@NgModule({
  imports: [
    SharedModule,
    UserServicesModule,
  ],
  declarations: [
    UserBadgeComponent,
    UserModalComponent,
  ],
  exports: [
    UserBadgeComponent,
    UserModalComponent,
  ],
  bootstrap: [
    UserModalComponent,
  ]
})
export class UserComponentModule {}
