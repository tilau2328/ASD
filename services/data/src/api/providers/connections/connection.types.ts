import {Field, ID, ObjectType} from "type-graphql";
import {UserType} from "../../auth/users/user.types";
import {ProviderType} from "../providers/provider.types";
import {ConnectionDto} from "../../../connectors/providers/connections/connection.api";

@ObjectType('Connection')
export class ConnectionType {
    @Field(() => ID)
    id: string;
    @Field(() => UserType)
    readonly user: string;
    @Field()
    readonly remoteId: string;
    @Field(() => ProviderType)
    readonly provider: string;
    @Field()
    readonly scope?: string;
    @Field()
    readonly token: string;
}

@ObjectType('ConnectionEvent')
export class ConnectionEventType {
    @Field()
    readonly type: string;
    @Field(() => ConnectionType)
    readonly payload: ConnectionDto;
}
