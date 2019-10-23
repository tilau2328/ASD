import {Module} from "@nestjs/common";
import {UserService} from "./user.service";
import {UsersDataModule} from "../../data/users/users.data.module";

@Module({
    imports: [UsersDataModule],
    providers: [UserService],
    exports: [UserService],
})
export class UsersServiceModule {}
