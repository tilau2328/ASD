import {Field, InputType} from "type-graphql";

@InputType()
export class UpdateUserInput {
    @Field({ nullable: true })
    readonly email?: string;
    @Field({ nullable: true })
    readonly username?: string;
    @Field({ nullable: true })
    readonly password?: string;
    @Field({ nullable: true })
    readonly avatarUrl?: string;
}
