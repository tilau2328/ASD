import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {signUpRoutes} from "./sign-up.routes";
import {SignUpPageComponent} from "./sign-up.page.component";
import {SignUpsPageComponent} from "./sign-ups.page.component";
import {SignUpComponentModule} from "../../../../../../components/auth/sign-ups/sign-up.component.module";

@NgModule({
  imports: [
    SignUpComponentModule,
    RouterModule.forChild(signUpRoutes),
  ],
  declarations: [
    SignUpPageComponent,
    SignUpsPageComponent,
  ],
})
export class SignUpsViewsModule {}
