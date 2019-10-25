import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {UserConnector} from "../../../connectors/auth/users/user.connector";
import {CurrentUser} from "../../../core/decorators/current-user.decorator";
import {UserDto} from "../../../connectors/auth/users/user.api";
import {UpdateUserInput} from "./user.inputs";
import {pubSub} from "../../app.api.module";
import {UserEventType} from "./user.types";
import {UserType} from "./user.types";
import {ID} from "type-graphql";

@Resolver(of => UserType)
export class UsersResolver {
    constructor(private readonly userConnector: UserConnector) {}

    @Query(returns => [UserType])
    async users(): Promise<UserType[]> {
        return this.userConnector.list();
    }

    @Query(returns => UserType)
    async user(@Args({ name: 'id', type: () => ID }) id: string): Promise<UserType> {
        return this.userConnector.get(id);
    }

    @Query(returns => UserType)
    async me(@CurrentUser() user: UserDto): Promise<UserType> {
        return user;
    }

    @Mutation(returns => UserType)
    async updateUser(
        @Args({ name: 'id', type: () => ID }) id: string,
        @Args('input') input: UpdateUserInput,
    ): Promise<UserType> {
        return this.userConnector.update(id, input);
    }

    @Mutation(returns => String)
    async deleteUser(@Args({ name: 'id', type: () => ID }) id: string): Promise<string> {
        return this.userConnector.delete(id);
    }

    @Subscription(returns => UserEventType, {
        resolve: value => value,
        filter: (payload, variables) =>
            (!variables.id || payload.userEvent.payload.id === variables.id),
    })
    async userEvent(@Args({ name: 'id', type: () => ID, nullable: true }) id?: string) {
        return pubSub.asyncIterator<UserEventType>('userEvent');
    }
}
