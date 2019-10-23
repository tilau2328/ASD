import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {UsersServiceModule} from "../../services/users/users.service.module";

@Module({
    imports: [
        UsersServiceModule,
    ],
    controllers: [UserController],
})
export class UsersApiModule {}
