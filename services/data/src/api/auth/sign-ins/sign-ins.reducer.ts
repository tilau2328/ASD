import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {SignInConnector} from "../../../connectors/auth/sign-ins/sign-in.connector";
import {SignInEventType, SignInType} from "./sign-in.types";
import {TokenType} from "../tokens/token.types";
import {SignInInput} from "./sign-in.inputs";
import {pubSub} from "../../app.api.module";
import {ID} from "type-graphql";

@Resolver(of => SignInType)
export class SignInsResolver {
    constructor(private readonly signInConnector: SignInConnector) {}

    @Query(returns => [SignInType])
    async signIns(): Promise<SignInType[]> {
        return this.signInConnector.list();
    }

    @Query(returns => SignInType)
    async signIn(@Args({ name: 'id', type: () => ID }) id: string): Promise<SignInType> {
        return this.signInConnector.get(id);
    }

    @Mutation(returns => TokenType)
    async createSignIn(@Args('input') input: SignInInput): Promise<TokenType> {
        return this.signInConnector.create(input);
    }

    @Subscription(returns => SignInEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.signInEvent.payload.id === variables.id),
    })
    async signInEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<SignInEventType>('signInEvent');
    }
}
