import {Module} from "@nestjs/common";
import {SignUpsResolver} from "./sign-ups.reducer";
import {SignUpsConnectorModule} from "../../../connectors/auth/sign-ups/sign-ups.connector.module";

@Module({
    imports: [SignUpsConnectorModule],
    providers: [SignUpsResolver],
})
export class SignUpsApiModule {}
