import {Field, ID, ObjectType} from "type-graphql";
import {ProviderType} from "../providers/provider.types";
import {ClientType} from "../../auth/clients/client.types";

@ObjectType()
export class ProvisionType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field()
    readonly clientId: string;
    @Field()
    readonly clientSecret: string;
    @Field(() => ClientType)
    readonly client: string;
    @Field(() => ProviderType)
    readonly provider: string;
}
