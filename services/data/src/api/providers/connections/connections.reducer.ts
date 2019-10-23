import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ConnectionConnector} from "../../../connectors/providers/connections/connection.connector";
import {ConnectionInput} from "./connection.inputs";
import {ConnectionType} from "./connection.types";

@Resolver('Connection')
export class ConnectionsResolver {
    constructor(private readonly connectionConnector: ConnectionConnector) {}

    @Query(() => [ConnectionType])
    async connections(): Promise<ConnectionType[]> {
        return this.connectionConnector.list();
    }

    @Mutation(() => ConnectionType)
    async createConnection(@Args('input') input: ConnectionInput): Promise<ConnectionType> {
        return this.connectionConnector.create(input);
    }
}
