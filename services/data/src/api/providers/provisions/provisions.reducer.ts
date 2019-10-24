import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {ProvisionConnector} from "../../../connectors/providers/provisions/provision.connector";
import {CreateProvisionInput, UpdateProvisionInput} from "./provision.inputs";
import {ProvisionEventType, ProvisionType} from "./provision.types";
import {pubSub} from "../../app.api.module";
import {ID} from "type-graphql";

@Resolver(of => ProvisionType)
export class ProvisionsResolver {
    constructor(private readonly provisionConnector: ProvisionConnector) {}

    @Query(returns => [ProvisionType])
    async provisions(): Promise<ProvisionType[]> {
        return this.provisionConnector.list();
    }

    @Query(returns => ProvisionType)
    async provision(@Args({ name: 'id', type: () => ID }) id: string): Promise<ProvisionType> {
        return this.provisionConnector.get(id);
    }

    @Mutation(returns => ProvisionType)
    async createProvision(@Args('input') input: CreateProvisionInput): Promise<ProvisionType> {
        return this.provisionConnector.create({ ...input, client: '' });
    }

    @Mutation(returns => ProvisionType)
    async updateProvision(
        @Args({ name: 'id', type: () => ID }) id: string,
        @Args('input') input: UpdateProvisionInput,
    ): Promise<ProvisionType> {
        return this.provisionConnector.update(id, input);
    }

    @Mutation(returns => String)
    async deleteProvision(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.provisionConnector.delete(id);
    }

    @Subscription(returns => ProvisionEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.provisionEvent.payload.id === variables.id),
    })
    async provisionEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<ProvisionEventType>('provisionEvent');
    }
}
