import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {ConnectionConnector} from "../../../connectors/providers/connections/connection.connector";
import {ConnectionEventType, ConnectionType} from "./connection.types";
import {ConnectionInput} from "./connection.inputs";
import {pubSub} from "../../app.api.module";
import {ID} from "type-graphql";

@Resolver(of => ConnectionType)
export class ConnectionsResolver {
    constructor(private readonly connectionConnector: ConnectionConnector) {}

    @Query(returns => [ConnectionType])
    async connections(): Promise<ConnectionType[]> {
        return this.connectionConnector.list();
    }

    @Mutation(returns => ConnectionType)
    async createConnection(@Args('input') input: ConnectionInput): Promise<ConnectionType> {
        return this.connectionConnector.create(input);
    }

    @Mutation(returns => String)
    async deleteConnection(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.connectionConnector.delete(id);
    }
    
    @Subscription(returns => ConnectionEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.connectionEvent.payload.id === variables.id),
    })
    async connectionEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<ConnectionEventType>('connectionEvent');
    }
}
