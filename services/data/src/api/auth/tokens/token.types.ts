import {Field, ID, ObjectType} from "type-graphql";
import {UserType} from "../users/user.types";

@ObjectType('Token')
export class TokenType {
    @Field(() => ID)
    id: string;
    @Field(() => UserType)
    readonly user: string;
    @Field()
    readonly accessToken: string;
    @Field()
    readonly refreshToken: string;
    @Field()
    readonly tokenValidity: Date;
    @Field()
    readonly refreshValidity: Date;
}
