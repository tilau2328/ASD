import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {AuthRoutingModule} from "./auth.routing.module";
import {AuthModule} from "../../modules/auth/auth.module";
import {SignInPageComponent} from "./modules/sign-ins/pages/sign-in.page.component";
import {SignUpPageComponent} from "./modules/sign-ups/pages/sign-up.page.component";
import {SignInsPageComponent} from "./modules/sign-ins/pages/sign-ins.page.component";
import {SignUpsPageComponent} from "./modules/sign-ups/pages/sign-ups.page.component";
import {ProviderViewsModule} from "../../../admin/providers/provider.views.module";
import {SignInFormComponent} from "./modules/sign-ins/components/sign-in.form.component";
import {SignUpFormComponent} from "./modules/sign-ups/components/sign-up.form.component";

@NgModule({
  imports: [
    AuthModule,
    SharedModule,
    AuthRoutingModule,
    ProviderViewsModule,
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    SignInPageComponent,
    SignUpPageComponent,
    SignInsPageComponent,
    SignUpsPageComponent,
  ],
  exports: [
    SignInFormComponent,
  ]
})
export class AuthViewsModule {}
