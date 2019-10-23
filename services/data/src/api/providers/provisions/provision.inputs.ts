import {Field, InputType} from "type-graphql";

@InputType()
export class CreateProvisionInput {
    @Field()
    readonly name: string;
    @Field()
    readonly scope: string;
    @Field()
    readonly provider: string;
    @Field()
    readonly clientId: string;
    @Field()
    readonly clientSecret: string;
}

@InputType()
export class UpdateProvisionInput {
    @Field()
    readonly name?: string;
    @Field()
    readonly provider?: string;
    @Field()
    readonly clientId?: string;
    @Field()
    readonly clientSecret?: string;
}
