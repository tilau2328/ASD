import {Module} from "@nestjs/common";
import {UsersResolver} from "./users.reducer";
import {UsersConnectorModule} from "../../../connectors/auth/users/users.connector.module";

@Module({
    imports: [UsersConnectorModule],
    providers: [UsersResolver],
})
export class UsersApiModule {}
