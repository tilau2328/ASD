import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {UserRoutingModule} from "./user.routing.module";
import {UserModule} from "../../modules/auth/modules/users/user.module";
import {UserService} from "../../modules/auth/modules/users/user.service";
import {UserPageComponent} from "./pages/user.page.component";
import {UsersPageComponent} from "./pages/users.page.component";
import {UserConnector} from "../../modules/auth/modules/users/user.connector";
import { UserModalComponent } from './components/user.modal.component';

@NgModule({
  imports: [
    UserModule,
    SharedModule,
    UserRoutingModule,
  ],
  declarations: [
    UserPageComponent,
    UsersPageComponent,
    UserModalComponent,
  ],
  providers: [
    UserService,
    UserConnector,
  ],
  bootstrap: [
    UserModalComponent,
  ]
})
export class UserViewsModule {}
