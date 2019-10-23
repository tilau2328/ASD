import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateClientInput {
    @Field()
    readonly name: string;
    @Field()
    readonly scope: string;
    @Field()
    readonly clientId: string;
    @Field()
    readonly clientSecret: string;
}

@InputType()
export class UpdateClientInput {
    @Field()
    readonly name?: string;
    @Field()
    readonly scope?: string;
    @Field()
    readonly clientId?: string;
    @Field()
    readonly clientSecret?: string;
}
