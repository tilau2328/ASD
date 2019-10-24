import {Field, ID, ObjectType} from "type-graphql";
import {ResourceType} from "../resources/resource.types";
import {ProviderDto} from "../../../connectors/providers/providers/provider.api";

@ObjectType('Provider')
export class ProviderType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field({ nullable: true })
    readonly scope?: string;
    @Field(() => ResourceType)
    readonly authUrl: string;
    @Field(() => ResourceType)
    readonly userUrl: string;
    @Field(() => ResourceType)
    readonly tokenUrl: string;
}

@ObjectType('ProviderEvent')
export class ProviderEventType {
    @Field()
    readonly type: string;
    @Field(() => ProviderType)
    readonly payload: ProviderDto;
}
