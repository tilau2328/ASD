import {NgModule} from "@angular/core";
import {UserService} from "./user.service";
import {UsersConnectorsModule} from "../../../connectors/auth/users/users.connectors.module";

@NgModule({
  imports: [UsersConnectorsModule],
  providers: [UserService],
})
export class UserServicesModule {}
