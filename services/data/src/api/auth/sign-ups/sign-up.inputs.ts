import {Field, InputType} from "type-graphql";
import {ConnectionInput} from "../../providers/connections/connection.inputs";

@InputType()
export class SignUpInput {
    @Field()
    readonly email: string;
    @Field()
    readonly username: string;
    @Field()
    readonly password: string;
    @Field({ nullable: true })
    readonly avatarUrl?: string;
    @Field(type => [ConnectionInput], { nullable: true })
    readonly connections?: ConnectionInput[];
}
