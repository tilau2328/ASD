import {InputType, Field, ID} from 'type-graphql';

@InputType()
export class ConnectionInput {
    @Field(() => ID)
    readonly provider: string;
    @Field()
    readonly state: string;
    @Field()
    readonly code: string;
}
