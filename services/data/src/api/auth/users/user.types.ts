import {Field, ID, ObjectType} from "type-graphql";
import {ConnectionType} from "../../providers/connections/connection.types";

@ObjectType()
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
