import {NgModule} from "@angular/core";
import {CoreModule} from "../../modules/core.module";
import {SharedModule} from "../shared/shared.module";
import {CoreRoutingModule} from "./core.routing.module";
import {AuthViewsModule} from "../auth/auth.views.module";
import {HomePageComponent} from "./pages/home.page.component";
import {NavBarComponent} from "./components/nav-bar.component";
import {NotFoundPageComponent} from "./pages/not-found.page.component";

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    CoreRoutingModule,
    AuthViewsModule,
  ],
  declarations: [
    NavBarComponent,
    HomePageComponent,
    NotFoundPageComponent,
  ],
  exports: [
    CoreModule,
    NavBarComponent,
  ]
})
export class CoreViewModule {}
