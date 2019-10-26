import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {SignUpFormComponent} from "./sign-up.form.component";
import {SignUpServicesModule} from "../../../services/auth/sign-ups/sign-up.services.module";
import {ConnectionComponentModule} from "../../providers/connections/connection.component.module";

@NgModule({
  imports: [
    SharedModule,
    SignUpServicesModule,
    ConnectionComponentModule,
  ],
  declarations: [
    SignUpFormComponent,
  ],
  exports: [
    SignUpFormComponent,
  ]
})
export class SignUpComponentModule {}
