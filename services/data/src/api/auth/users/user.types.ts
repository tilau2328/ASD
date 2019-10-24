import {Field, ID, ObjectType} from "type-graphql";
import {UserDto} from "../../../connectors/auth/users/user.api";
import {ConnectionType} from "../../providers/connections/connection.types";

@ObjectType('User')
export class UserType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly email: string;
    @Field()
    readonly username: string;
    @Field({ nullable: true })
    readonly avatarUrl?: string;
    @Field(type => [ConnectionType], { nullable: true })
    readonly connections?: ConnectionType[];
}

@ObjectType('UserEvent')
export class UserEventType {
    @Field()
    readonly type: string;
    @Field(() => UserType)
    readonly payload: UserDto;
}
