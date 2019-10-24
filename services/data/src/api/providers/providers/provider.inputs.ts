import {Field, InputType} from "type-graphql";
import {CreateResourceInput} from "../resources/resource.inputs";

@InputType()
export class CreateProviderInput {
    @Field()
    readonly name: string;
    @Field({ nullable: true })
    readonly scope?: string;
    @Field(() => CreateResourceInput)
    readonly authUrl: CreateResourceInput;
    @Field(() => CreateResourceInput)
    readonly userUrl: CreateResourceInput;
    @Field(() => CreateResourceInput)
    readonly tokenUrl: CreateResourceInput;
}

@InputType()
export class UpdateProviderInput {
    @Field({ nullable: true })
    readonly name?: string;
    @Field({ nullable: true })
    readonly scope?: string;
    @Field({ nullable: true })
    readonly authUrl?: string;
    @Field({ nullable: true })
    readonly userUrl?: string;
    @Field({ nullable: true })
    readonly tokenUrl?: string;
}
