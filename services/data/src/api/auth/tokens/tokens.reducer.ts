import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {TokenConnector} from "../../../connectors/auth/tokens/token.connector";
import {TokenEventType, TokenType} from "./token.types";
import {pubSub} from "../../app.api.module";
import {ID} from "type-graphql";

@Resolver(of => TokenType)
export class TokensResolver {
    constructor(private readonly tokenConnector: TokenConnector) {}

    @Query(returns => [TokenType])
    async tokens(): Promise<TokenType[]> {
        return this.tokenConnector.list();
    }

    @Query(returns => [TokenType])
    async token(@Args({ name: 'id', type: () => ID }) id: string): Promise<TokenType> {
        return this.tokenConnector.get(id);
    }

    @Mutation(returns => TokenType)
    async refreshToken(@Args('refreshToken') refreshToken: string): Promise<TokenType> {
        return this.tokenConnector.refreshToken(refreshToken);
    }

    @Mutation(returns => TokenType)
    async revokeToken(@Args('refreshToken') refreshToken: string): Promise<TokenType> {
        return this.tokenConnector.revokeToken(refreshToken);
    }

    @Mutation(returns => String)
    async deleteToken(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.tokenConnector.delete(id);
    }
    
    @Subscription(returns => TokenEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.tokenEvent.payload.id === variables.id),
    })
    async tokenEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<TokenEventType>('tokenEvent');
    }
}
