import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {ProfileRoutingModule} from "./profile.routing.module";
import {ProfilePageComponent} from "./pages/profile.page.component";

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfilePageComponent,
  ],
})
export class ProfileViewsModule {}
