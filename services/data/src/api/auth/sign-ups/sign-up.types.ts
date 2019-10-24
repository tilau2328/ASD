import {Field, ID, ObjectType} from "type-graphql";
import {ConnectionType} from "../../providers/connections/connection.types";
import {SignUpDto} from "../../../connectors/auth/sign-ups/sign-up.api";
import {TokenType} from "../tokens/token.types";
import {UserType} from "../users/user.types";

@ObjectType('SignUp')
export class SignUpType {
    @Field(() => ID)
    id: string;
    @Field(() => UserType)
    user: string;
    @Field(() => TokenType)
    token: string;
    @Field(type => [ConnectionType], { nullable: true })
    readonly connections?: string[];
    @Field()
    readonly email: string;
    @Field()
    readonly username: string;
    @Field({ nullable: true })
    readonly avatarUrl?: string;
}


@ObjectType('SignUpEvent')
export class SignUpEventType {
    @Field()
    readonly type: string;
    @Field(() => SignUpType)
    readonly payload: SignUpDto;
}
