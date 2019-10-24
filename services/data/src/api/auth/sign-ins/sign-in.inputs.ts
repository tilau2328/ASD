import { InputType, Field } from 'type-graphql';
import {ConnectionInput} from "../../providers/connections/connection.inputs";

@InputType()
export class SignInInput {
    @Field({ nullable: true })
    readonly username?: string;
    @Field({ nullable: true })
    readonly password?: string;
    @Field(() => ConnectionInput, { nullable: true })
    readonly connection?: ConnectionInput;
}
