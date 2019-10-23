import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class ResourceType {
    @Field(() => ID)
    id: string;
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
