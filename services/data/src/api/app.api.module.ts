import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import {AuthApiModule} from "./auth/auth.api.module";
import {ProvidersApiModule} from "./providers/providers/providers.api.module";

export const pubSub: PubSub = new PubSub();

@Module({
    imports: [
        AuthApiModule,
        ProvidersApiModule,
        GraphQLModule.forRoot({
            context: ({ req }) => ({ req }),
            autoSchemaFile: 'schema.graphql',
            installSubscriptionHandlers: true,
        }),
    ],
})
export class AppApiModule {}
