import {NgModule} from "@angular/core";
import {userRoutes} from "./user.routes";
import {RouterModule} from "@angular/router";
import {UserPageComponent} from "./user.page.component";
import {UsersPageComponent} from "./users.page.component";
import {UserComponentModule} from "../../../../components/users/user.component.module";

@NgModule({
  imports: [
    UserComponentModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserPageComponent,
    UsersPageComponent,
  ]
})
export class UserViewsModule {}
