import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
import {UserServicesModule} from "../users/user.services.module";
import {TokensConnectorsModule} from "../../../connectors/auth/tokens/tokens.connectors.module";

@NgModule({
  imports: [
    UserServicesModule,
    TokensConnectorsModule,
  ],
  providers: [AuthService],
})
export class AuthServicesModule {}
