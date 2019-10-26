import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {UserRoutingModule} from "./user.routing.module";
import {UserPageComponent} from "./pages/user.page.component";
import {UsersPageComponent} from "./pages/users.page.component";
import {UserServicesModule} from "../../../services/auth/users/user.services.module";

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    UserServicesModule,
  ],
  declarations: [
    UserPageComponent,
    UsersPageComponent,
  ]
})
export class UserViewsModule {}
