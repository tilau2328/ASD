import {Query, Resolver} from "@nestjs/graphql";
import {TokenConnector} from "../../../connectors/auth/tokens/token.connector";
import {TokenType} from "./token.types";

@Resolver('Token')
export class TokensResolver {
    constructor(private readonly tokenConnector: TokenConnector) {}

    @Query(() => [TokenType])
    async tokens(): Promise<TokenType[]> {
        return this.tokenConnector.list();
    }
}
