import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {ResourceConnector} from "../../../connectors/providers/resources/resource.connector";
import {CreateResourceInput, UpdateResourceInput} from "./resource.inputs";
import {ResourceType} from "./resource.types";
import {ID} from "type-graphql";
import {ResourceEventType} from "../resources/resource.types";
import {pubSub} from "../../app.api.module";

@Resolver(of => ResourceType)
export class ResourcesResolver {
    constructor(private readonly resourceConnector: ResourceConnector) {}

    @Query(returns => [ResourceType])
    async resources(): Promise<ResourceType[]> {
        return this.resourceConnector.list();
    }

    @Query(returns => ResourceType)
    async resource(@Args({ name: 'id', type: () => ID }) id: string): Promise<ResourceType> {
        return this.resourceConnector.get(id);
    }

    @Mutation(returns => ResourceType)
    async createResource(@Args('input') input: CreateResourceInput): Promise<ResourceType> {
        return this.resourceConnector.create(input);
    }

    @Mutation(returns => ResourceType)
    async updateResource(
        @Args({ name: 'id', type: () => ID }) id: string,
        @Args('input') input: UpdateResourceInput,
    ): Promise<ResourceType> {
        return this.resourceConnector.update(id, input);
    }

    @Mutation(returns => String)
    async deleteResource(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.resourceConnector.delete(id);
    }
    
    @Subscription(returns => ResourceEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.resourceEvent.payload.id === variables.id),
    })
    async resourceEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<ResourceEventType>('resourceEvent');
    }
}
