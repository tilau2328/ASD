import {NgModule} from "@angular/core";
import {SignUpService} from "./sign-up.service";
import {AuthServicesModule} from "../auth/auth.services.module";
import {SignUpsConnectorsModule} from "../../../connectors/auth/sign-ups/sign-ups.connectors.module";

@NgModule({
  imports: [
    AuthServicesModule,
    SignUpsConnectorsModule,
  ],
  providers: [SignUpService],
})
export class SignUpServicesModule {}
