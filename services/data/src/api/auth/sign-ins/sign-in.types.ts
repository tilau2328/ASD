import {Field, ID, ObjectType} from "type-graphql";
import {ConnectionType} from "../../providers/connections/connection.types";
import {SignInDto} from "../../../connectors/auth/sign-ins/sign-in.api";
import {TokenType} from "../tokens/token.types";
import {UserType} from "../users/user.types";

@ObjectType('SignIn')
export class SignInType {
    @Field(() => ID)
    id: string;
    @Field(() => UserType)
    user: string;
    @Field(() => TokenType)
    token: string;
    @Field(() => ConnectionType, { nullable: true })
    readonly connection?: string;
    @Field({ nullable: true })
    readonly username?: string;
}

@ObjectType('SignInEvent')
export class SignInEventType {
    @Field()
    readonly type: string;
    @Field(() => SignInType)
    readonly payload: SignInDto;
}
