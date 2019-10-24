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
    @Field({ nullable: true })
    readonly params?: string;
    @Field({ nullable: true })
    readonly headers?: string;
    @Field({ nullable: true })
    readonly queryParams?: string;
}

@InputType()
export class UpdateResourceInput {
    @Field({ nullable: true })
    readonly name?: string;
    @Field({ nullable: true })
    readonly method?: string;
    @Field({ nullable: true })
    readonly endpoint?: string;
    @Field({ nullable: true })
    readonly provider?: string;
    @Field({ nullable: true })
    readonly params?: string;
    @Field({ nullable: true })
    readonly headers?: string;
    @Field({ nullable: true })
    readonly queryParams?: string;
}
