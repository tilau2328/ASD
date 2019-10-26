import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {SignInFormComponent} from "./sign-in.form.component";
import {SignInServicesModule} from "../../../services/auth/sign-ins/sign-in.services.module";
import {ConnectionComponentModule} from "../../providers/connections/connection.component.module";

@NgModule({
  imports: [
    SharedModule,
    SignInServicesModule,
    ConnectionComponentModule,
  ],
  declarations: [
    SignInFormComponent,
  ],
  exports: [
    SignInFormComponent,
  ]
})
export class SignInComponentModule {}
