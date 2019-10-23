import {Module} from "@nestjs/common";
import {UserConnector} from "./user.connector";
import {AppConnectorModule} from "../../app.connector.module";

@Module({
    imports: [AppConnectorModule],
    providers: [UserConnector],
    exports: [UserConnector],
})
export class UsersConnectorModule {}
