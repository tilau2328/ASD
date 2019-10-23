import {Field, InputType} from "type-graphql";
import {CreateResourceInput} from "../resources/resource.inputs";

@InputType()
export class CreateProviderInput {
    @Field()
    readonly name: string;
    @Field(() => CreateResourceInput)
    readonly authUrl: CreateResourceInput;
    @Field(() => CreateResourceInput)
    readonly userUrl: CreateResourceInput;
    @Field(() => CreateResourceInput)
    readonly tokenUrl: CreateResourceInput;
}

@InputType()
export class UpdateProviderInput {
    @Field()
    readonly name?: string;
    @Field()
    readonly authUrl?: string;
    @Field()
    readonly userUrl?: string;
    @Field()
    readonly tokenUrl?: string;
}
