import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ClientType} from "./client.types";
import {CreateClientInput, UpdateClientInput} from "./client.inputs";
import {ClientConnector} from "../../../connectors/auth/clients/client.connector";

@Resolver('Client')
export class ClientsResolver {
    constructor(private readonly clientConnector: ClientConnector) {}

    @Query(() => [ClientType])
    async clients(): Promise<ClientType[]> {
        return this.clientConnector.list();
    }

    @Mutation(() => ClientType)
    async createClient(@Args('input') input: CreateClientInput): Promise<ClientType> {
        return this.clientConnector.create(input);
    }

    @Mutation(() => ClientType)
    async updateClient(
        @Args('id') id: string,
        @Args('input') input: UpdateClientInput,
    ): Promise<ClientType> {
        return this.clientConnector.update(id, input);
    }

    @Mutation(() => String)
    async deleteClient(@Args('id') id: string): Promise<string> {
        return this.clientConnector.delete(id);
    }
}
