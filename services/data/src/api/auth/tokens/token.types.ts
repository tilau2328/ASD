import {Field, ID, ObjectType} from "type-graphql";
import {TokenDto} from "../../../connectors/auth/tokens/token.api";

@ObjectType('Token')
export class TokenType {
    @Field(() => ID)
    id: string;
    @Field(() => TokenType)
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

@ObjectType('TokenEvent')
export class TokenEventType {
    @Field()
    readonly type: string;
    @Field(() => TokenType)
    readonly payload: TokenDto;
}
