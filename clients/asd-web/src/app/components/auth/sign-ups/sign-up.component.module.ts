import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {SignUpFormComponent} from "./sign-up.form.component";
import {SignUpServicesModule} from "../../../services/auth/sign-ups/sign-up.services.module";
import {ConnectionComponentModule} from "../../providers/connections/connection.component.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
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
