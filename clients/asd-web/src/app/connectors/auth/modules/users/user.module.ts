import {NgModule} from "@angular/core";
import {UserService} from "./user.service";
import {UserConnector} from "./user.connector";

@NgModule({
  providers: [
    UserService,
    UserConnector,
  ],
})
export class UserModule {}
