import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {signInRoutes} from "./sign-in.routes";
import {SignInPageComponent} from "./sign-in.page.component";
import {SignInsPageComponent} from "./sign-ins.page.component";
import {SignUpComponentModule} from "../../../../../../components/auth/sign-ups/sign-up.component.module";

@NgModule({
  imports: [
    SignUpComponentModule,
    RouterModule.forChild(signInRoutes),
  ],
  declarations: [
    SignInPageComponent,
    SignInsPageComponent,
  ],
})
export class SignInsViewsModule {}
