import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavBarComponent} from "./nav-bar.component";
import {SharedModule} from "../shared/shared.module";
import {UserComponentModule} from "../users/user.component.module";
import {SignInComponentModule} from "../auth/sign-ins/sign-in.component.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    UserComponentModule,
    SignInComponentModule,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  exports: [
    AppComponent,
    NavBarComponent,
  ],
})
export class CoreComponentModule {}
