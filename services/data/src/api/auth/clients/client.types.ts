import {Field, ID, ObjectType} from "type-graphql";

@ObjectType('Client')
export class ClientType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field()
    readonly scope: string;
    @Field()
    readonly clientId: string;
    @Field()
    readonly clientSecret: string;
}
