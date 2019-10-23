import {NgModule} from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthConnector} from "./auth.connector";

@NgModule({
  providers: [
    AuthService,
    AuthConnector,
  ]
})
export class AuthModule {}
