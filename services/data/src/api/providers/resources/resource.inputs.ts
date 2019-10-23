import {Field, InputType} from "type-graphql";

@InputType()
export class CreateResourceInput {
    @Field()
    readonly name: string;
    @Field()
    readonly method: string;
    @Field()
    readonly endpoint: string;
    @Field()
    readonly provider: string;
    @Field()
    readonly params?: string;
    @Field()
    readonly headers?: string;
    @Field()
    readonly queryParams?: string;
}

@InputType()
export class UpdateResourceInput {
    @Field()
    readonly name?: string;
    @Field()
    readonly method?: string;
    @Field()
    readonly endpoint?: string;
    @Field()
    readonly provider?: string;
    @Field()
    readonly params?: string;
    @Field()
    readonly headers?: string;
    @Field()
    readonly queryParams?: string;
}
