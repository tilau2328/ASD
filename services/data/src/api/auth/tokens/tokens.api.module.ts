import {Module} from "@nestjs/common";
import {TokensResolver} from "./tokens.reducer";
import {TokensConnectorModule} from "../../../connectors/auth/tokens/tokens.connector.module";

@Module({
    imports: [TokensConnectorModule],
    providers: [TokensResolver],
})
export class TokensApiModule {}
