import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ProfileRoutingModule} from "./profile.routing.module";
import {ProfilePageComponent} from "./pages/profile.page.component";
import {UserModalComponent} from "./components/user.modal.component";

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
  declarations: [
    UserModalComponent,
    ProfilePageComponent,
  ],
  bootstrap: [
    UserModalComponent,
  ]
})
export class ProfileViewsModule {}
