import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {UserConnector} from "../../../connectors/auth/users/user.connector";
import {UpdateUserInput} from "./user.inputs";
import {UserType} from "./user.types";

@Resolver('User')
export class UsersResolver {
    constructor(private readonly userConnector: UserConnector) {}

    @Query(() => [UserType])
    async users(): Promise<UserType[]> {
        return this.userConnector.list();
    }

    @Mutation(() => UserType)
    async updateUser(
        @Args('id') id: string,
        @Args('input') input: UpdateUserInput,
    ): Promise<UserType> {
        return this.userConnector.update(id, input);
    }

    @Mutation(() => String)
    async deleteUser(@Args('id') id: string): Promise<string> {
        return this.userConnector.delete(id);
    }
}
