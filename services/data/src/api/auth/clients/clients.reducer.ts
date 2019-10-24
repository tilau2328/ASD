import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {ClientEventType, ClientType} from "./client.types";
import {CreateClientInput, UpdateClientInput} from "./client.inputs";
import {ClientConnector} from "../../../connectors/auth/clients/client.connector";
import {ID} from "type-graphql";
import {pubSub} from "../../app.api.module";

@Resolver(of => ClientType)
export class ClientsResolver {
    constructor(private readonly clientConnector: ClientConnector) {}

    @Query(returns => [ClientType])
    async clients(): Promise<ClientType[]> {
        return this.clientConnector.list();
    }

    @Query(returns => ClientType)
    async client(@Args({ name: 'id', type: () => ID }) id: string): Promise<ClientType> {
        return this.clientConnector.get(id);
    }

    @Mutation(returns => ClientType)
    async createClient(@Args('input') input: CreateClientInput): Promise<ClientType> {
        return this.clientConnector.create(input);
    }

    @Mutation(returns => ClientType)
    async updateClient(
        @Args({ name: 'id', type: () => ID }) id: string,
        @Args('input') input: UpdateClientInput,
    ): Promise<ClientType> {
        return this.clientConnector.update(id, input);
    }

    @Mutation(returns => String)
    async deleteClient(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.clientConnector.delete(id);
    }

    @Subscription(returns => ClientEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.clientEvent.payload.id === variables.id),
    })
    async clientEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<ClientEventType>('clientEvent');
    }
}
