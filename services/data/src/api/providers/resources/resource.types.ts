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
    @Field()
    readonly params?: string;
    @Field()
    readonly headers?: string;
    @Field()
    readonly queryParams?: string;
}
