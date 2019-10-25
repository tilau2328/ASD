import {Module} from "@nestjs/common";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {UsersConnectorModule} from "../connectors/auth/users/users.connector.module";

@Module({
    imports: [
        UsersConnectorModule,
    ],
    providers: [
        JwtStrategy,
    ]
})
export class AppCoreModule {}
