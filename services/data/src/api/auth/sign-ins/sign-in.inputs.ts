import { InputType, Field } from 'type-graphql';
import {ConnectionInput} from "../../providers/connections/connection.inputs";

@InputType()
export class SignInInput {
    @Field()
    readonly username?: string;
    @Field()
    readonly password?: string;
    @Field(() => ConnectionInput)
    readonly connection?: ConnectionInput;
}
