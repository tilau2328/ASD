import {Field, ID, ObjectType} from "type-graphql";
import {ProviderType} from "../providers/provider.types";
import {ClientType} from "../../auth/clients/client.types";
import {ProviderDto} from "../../../connectors/providers/providers/provider.api";
import {ProvisionDto} from "../../../connectors/providers/provisions/provision.api";

@ObjectType('Provision')
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

@ObjectType('ProvisionEvent')
export class ProvisionEventType {
    @Field()
    readonly type: string;
    @Field(() => ProvisionType)
    readonly payload: ProvisionDto;
}
