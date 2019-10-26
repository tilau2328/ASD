import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {CoreRoutingModule} from "./core.routing.module";
import {HomePageComponent} from "./pages/home.page.component";
import {NavBarComponent} from "./components/nav-bar.component";
import {AuthViewsModule} from "./modules/auth/auth.views.module";
import {UserBadgeComponent} from "./components/user.badge.component";
import {NotFoundPageComponent} from "./pages/not-found.page.component";
import {AuthServicesModule} from "../../services/auth/auth/auth.services.module";

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    AuthServicesModule,
    AuthViewsModule,
  ],
  declarations: [
    NavBarComponent,
    HomePageComponent,
    UserBadgeComponent,
    NotFoundPageComponent,
  ],
  exports: [
    NavBarComponent,
  ]
})
export class CoreViewModule {}
