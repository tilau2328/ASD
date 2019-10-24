import {Field, ID, ObjectType} from "type-graphql";
import {ClientDto} from "../../../connectors/auth/clients/client.api";
import {ConnectionType} from "../../providers/connections/connection.types";

@ObjectType('Client')
export class ClientType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field({ nullable: true })
    readonly scope: string;
    @Field()
    readonly clientId: string;
    @Field()
    readonly clientSecret: string;
}

@ObjectType('ClientEvent')
export class ClientEventType {
    @Field()
    readonly type: string;
    @Field(() => ClientType)
    readonly payload: ClientDto;
}
