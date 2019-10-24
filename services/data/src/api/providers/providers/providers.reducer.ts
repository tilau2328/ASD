import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {ProviderConnector} from "../../../connectors/providers/providers/provider.connector";
import {CreateProviderInput, UpdateProviderInput} from "./provider.inputs";
import {ProviderType} from "./provider.types";
import {ID} from "type-graphql";
import {ProviderEventType} from "../providers/provider.types";
import {pubSub} from "../../app.api.module";

@Resolver(of => ProviderType)
export class ProvidersResolver {
    constructor(private readonly providerConnector: ProviderConnector) {}

    @Query(returns => [ProviderType])
    async providers(): Promise<ProviderType[]> {
        return this.providerConnector.list();
    }

    @Query(returns => ProviderType)
    async provider(@Args({ name: 'id', type: () => ID }) id: string): Promise<ProviderType> {
        return this.providerConnector.get(id);
    }

    @Mutation(returns => ProviderType)
    async createProvider(@Args('input') input: CreateProviderInput): Promise<ProviderType> {
        return this.providerConnector.create(input);
    }

    @Mutation(returns => ProviderType)
    async updateProvider(
        @Args({ name: 'id', type: () => ID }) id: string,
        @Args('input') input: UpdateProviderInput,
    ): Promise<ProviderType> {
        return this.providerConnector.update(id, input);
    }

    @Mutation(returns => String)
    async deleteProvider(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.providerConnector.delete(id);
    }

    @Subscription(returns => ProviderEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.providerEvent.payload.id === variables.id),
    })
    async providerEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<ProviderEventType>('providerEvent');
    }
}
