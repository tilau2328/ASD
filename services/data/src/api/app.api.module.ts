import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {AuthApiModule} from "./auth/auth.api.module";
import {ProvidersApiModule} from "./providers/providers/providers.api.module";

@Module({
    imports: [
        AuthApiModule,
        ProvidersApiModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
    ],
})
export class AppApiModule {}
