import {NgModule} from "@angular/core";
import {SignInService} from "./sign-in.service";
import {AuthServicesModule} from "../auth/auth.services.module";
import {SignInsConnectorsModule} from "../../../connectors/auth/sign-ins/sign-ins.connectors.module";

@NgModule({
  imports: [
    AuthServicesModule,
    SignInsConnectorsModule,
  ],
  providers: [SignInService],
})
export class SignInServicesModule {}
