import {Module} from "@nestjs/common";
import {ProviderService} from "./provider.service";
import {ProvidersDataModule} from "../../data/providers/providers.data.module";

@Module({
    imports: [ProvidersDataModule],
    providers: [ProviderService],
    exports: [ProviderService],
})
export class ProvidersServiceModule {}
