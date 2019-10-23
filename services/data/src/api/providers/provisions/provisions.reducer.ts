import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ProvisionConnector} from "../../../connectors/providers/provisions/provision.connector";
import {CreateProvisionInput, UpdateProvisionInput} from "./provision.inputs";
import {ProvisionType} from "./provision.types";

@Resolver('Provision')
export class ProvisionsResolver {
    constructor(private readonly provisionConnector: ProvisionConnector) {}

    @Query(() => [ProvisionType])
    async provisions(): Promise<ProvisionType[]> {
        return this.provisionConnector.list();
    }

    @Mutation(() => ProvisionType)
    async createProvision(@Args('input') input: CreateProvisionInput): Promise<ProvisionType> {
        return this.provisionConnector.create({ ...input, client: '' });
    }

    @Mutation(() => ProvisionType)
    async updateProvision(
        @Args('id') id: string,
        @Args('input') input: UpdateProvisionInput,
    ): Promise<ProvisionType> {
        return this.provisionConnector.update(id, input);
    }

    @Mutation(() => String)
    async deleteProvision(@Args('id') id: string): Promise<string> {
        return this.provisionConnector.delete(id);
    }
}
