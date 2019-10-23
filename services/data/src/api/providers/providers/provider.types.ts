import {Field, ID, ObjectType} from "type-graphql";
import {ResourceType} from "../resources/resource.types";

@ObjectType()
export class ProviderType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field(() => ResourceType)
    readonly authUrl: string;
    @Field(() => ResourceType)
    readonly userUrl: string;
    @Field(() => ResourceType)
    readonly tokenUrl: string;
}
