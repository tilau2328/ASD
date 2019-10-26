import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {signInRoutes} from "./sign-in.routes";
import {SignInPageComponent} from "./sign-in.page.component";
import {SignInsPageComponent} from "./sign-ins.page.component";
import {SignInComponentModule} from "../../../../../../components/auth/sign-ins/sign-in.component.module";

@NgModule({
  imports: [
    SignInComponentModule,
    RouterModule.forChild(signInRoutes),
  ],
  declarations: [
    SignInPageComponent,
    SignInsPageComponent,
  ],
})
export class SignInsViewsModule {}
