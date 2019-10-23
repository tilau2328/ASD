import {Module} from "@nestjs/common";
import {SignInsResolver} from "./sign-ins.reducer";
import {SignInsConnectorModule} from "../../../connectors/auth/sign-ins/sign-ins.connector.module";

@Module({
    imports: [SignInsConnectorModule],
    providers: [SignInsResolver],
})
export class SignInsApiModule {}
