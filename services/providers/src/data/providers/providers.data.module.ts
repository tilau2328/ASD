import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ProviderSchema} from "./provider.schema";
import {ProviderDao} from "./provider.dao";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Provider', schema: ProviderSchema },
        ]),
    ],
    providers: [ProviderDao],
    exports: [ProviderDao]
})
export class ProvidersDataModule {}
