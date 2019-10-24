import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {SignUpConnector} from "../../../connectors/auth/sign-ups/sign-up.connector";
import {SignUpEventType, SignUpType} from "./sign-up.types";
import {TokenType} from "../tokens/token.types";
import {SignUpInput} from "./sign-up.inputs";
import {pubSub} from "../../app.api.module";
import {ID} from "type-graphql";

@Resolver(of => SignUpType)
export class SignUpsResolver {
    constructor(private readonly signUpConnector: SignUpConnector) {}

    @Query(returns => [SignUpType])
    async signUps(): Promise<SignUpType[]> {
        return this.signUpConnector.list();
    }

    @Query(returns => SignUpType)
    async signUp(@Args({ name: 'id', type: () => ID }) id: string): Promise<SignUpType> {
        return this.signUpConnector.get(id);
    }

    @Mutation(returns => TokenType)
    async createSignUp(@Args('input') input: SignUpInput): Promise<TokenType> {
        return this.signUpConnector.create(input);
    }

    @Subscription(returns => SignUpEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.signUpEvent.payload.id === variables.id),
    })
    async signUpEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<SignUpEventType>('signUpEvent');
    }
}
