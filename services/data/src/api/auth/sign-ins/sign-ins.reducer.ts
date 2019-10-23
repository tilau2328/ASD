import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {SignInInput} from "./sign-in.inputs";
import {SignInType} from "./sign-in.types";
import {SignInConnector} from "../../../connectors/auth/sign-ins/sign-in.connector";

@Resolver('SignIn')
export class SignInsResolver {
    constructor(private readonly signInConnector: SignInConnector) {}

    @Query(() => [SignInType])
    async signIns(): Promise<SignInType[]> {
        return this.signInConnector.list();
    }

    @Mutation(() => SignInType)
    async createSignIn(@Args('input') input: SignInInput): Promise<SignInType> {
        return this.signInConnector.create(input);
    }
}
