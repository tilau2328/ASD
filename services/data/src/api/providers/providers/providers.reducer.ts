import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ProviderConnector} from "../../../connectors/providers/providers/provider.connector";
import {CreateProviderInput, UpdateProviderInput} from "./provider.inputs";
import {ProviderType} from "./provider.types";

@Resolver('Provider')
export class ProvidersResolver {
    constructor(private readonly providerConnector: ProviderConnector) {}

    @Query(() => [ProviderType])
    async providers(): Promise<ProviderType[]> {
        return this.providerConnector.list();
    }

    @Mutation(() => ProviderType)
    async createProvider(@Args('input') input: CreateProviderInput): Promise<ProviderType> {
        return this.providerConnector.create(input);
    }

    @Mutation(() => ProviderType)
    async updateProvider(
        @Args('id') id: string,
        @Args('input') input: UpdateProviderInput,
    ): Promise<ProviderType> {
        return this.providerConnector.update(id, input);
    }

    @Mutation(() => String)
    async deleteProvider(@Args('id') id: string): Promise<string> {
        return this.providerConnector.delete(id);
    }
}
