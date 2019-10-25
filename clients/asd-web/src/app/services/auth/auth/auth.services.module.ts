import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
import {TokensConnectorsModule} from "../../../connectors/auth/tokens/tokens.connectors.module";

@NgModule({
  imports: [TokensConnectorsModule],
  providers: [AuthService],
})
export class AuthServicesModule {}
