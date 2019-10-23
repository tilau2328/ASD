import { Module } from '@nestjs/common';
import {ProviderController} from "./provider.controller";
import {ProvidersServiceModule} from "../../services/providers/providers.services.module";

@Module({
    imports: [ProvidersServiceModule],
    controllers: [ProviderController]
})
export class ProvidersApiModule {}
