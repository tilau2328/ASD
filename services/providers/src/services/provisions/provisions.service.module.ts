import { Module } from "@nestjs/common";
import {ProvisionService} from "./provision.service";
import {ProvisionsDataModule} from "../../data/provisions/provisions.data.module";

@Module({
    imports: [ProvisionsDataModule],
    providers: [ProvisionService],
    exports: [ProvisionService],
})
export class ProvisionsServiceModule {}
