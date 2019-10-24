import {Field, ID, ObjectType} from "type-graphql";
import {ProviderType} from "../providers/provider.types";
import {ResourceDto} from "../../../connectors/providers/resources/resource.api";

@ObjectType('Resource')
export class ResourceType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field()
    readonly method: string;
    @Field()
    readonly endpoint: string;
    @Field(() => ProviderType)
    readonly provider: string;
    @Field({ nullable: true })
    readonly params?: string;
    @Field({ nullable: true })
    readonly headers?: string;
    @Field({ nullable: true })
    readonly queryParams?: string;
}

@ObjectType('ResourceEvent')
export class ResourceEventType {
    @Field()
    readonly type: string;
    @Field(() => ResourceType)
    readonly payload: ResourceDto;
}
