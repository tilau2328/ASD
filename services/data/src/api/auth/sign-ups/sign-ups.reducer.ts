import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {SignUpConnector} from "../../../connectors/auth/sign-ups/sign-up.connector";
import {SignUpInput} from "./sign-up.inputs";
import {SignUpType} from "./sign-up.types";

@Resolver('SignUp')
export class SignUpsResolver {
    constructor(private readonly signUpConnector: SignUpConnector) {}

    @Query(() => [SignUpType])
    async signUps(): Promise<SignUpType[]> {
        return this.signUpConnector.list();
    }

    @Mutation(() => SignUpType)
    async createSignUp(@Args('input') input: SignUpInput): Promise<SignUpType> {
        return this.signUpConnector.create(input);
    }
}
