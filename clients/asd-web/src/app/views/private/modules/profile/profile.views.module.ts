import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {profileRoutes} from "./profile.routes";
import {ProfilePageComponent} from "./profile.page.component";
import {UserComponentModule} from "../../../../components/users/user.component.module";

@NgModule({
  imports: [
    UserComponentModule,
    RouterModule.forChild(profileRoutes),
  ],
  declarations: [
    ProfilePageComponent,
  ],
})
export class ProfileViewsModule {}
