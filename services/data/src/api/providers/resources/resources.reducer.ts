import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ResourceConnector} from "../../../connectors/providers/resources/resource.connector";
import {CreateResourceInput, UpdateResourceInput} from "./resource.inputs";
import {ResourceType} from "./resource.types";

@Resolver('Resource')
export class ResourcesResolver {
    constructor(private readonly resourceConnector: ResourceConnector) {}

    @Query(() => [ResourceType])
    async resources(): Promise<ResourceType[]> {
        return this.resourceConnector.list();
    }

    @Mutation(() => ResourceType)
    async createResource(@Args('input') input: CreateResourceInput): Promise<ResourceType> {
        return this.resourceConnector.create(input);
    }

    @Mutation(() => ResourceType)
    async updateResource(
        @Args('id') id: string,
        @Args('input') input: UpdateResourceInput,
    ): Promise<ResourceType> {
        return this.resourceConnector.update(id, input);
    }

    @Mutation(() => String)
    async deleteResource(@Args('id') id: string): Promise<string> {
        return this.resourceConnector.delete(id);
    }
}
