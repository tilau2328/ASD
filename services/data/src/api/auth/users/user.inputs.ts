import {Field, InputType} from "type-graphql";

@InputType()
export class UpdateUserInput {
    @Field()
    readonly email?: string;
    @Field()
    readonly username?: string;
    @Field()
    readonly password?: string;
    @Field()
    readonly avatarUrl?: string;
}
