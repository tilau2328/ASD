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
    @Field()
    readonly avatarUrl?: string;
    @Field(() => [ConnectionInput])
    readonly connections: ConnectionInput[];
}
