import {Field, ID, ObjectType} from "type-graphql";
import {ConnectionType} from "../../providers/connections/connection.types";
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
    @Field(() => ConnectionType)
    readonly connection?: string;
    @Field()
    readonly username?: string;
}
