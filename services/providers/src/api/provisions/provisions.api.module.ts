import {Module} from "@nestjs/common";
import {ProvisionController} from "./provision.controller";
import {ProvisionsServiceModule} from "../../services/provisions/provisions.service.module";

@Module({
    imports: [ProvisionsServiceModule],
    controllers: [ProvisionController]
})
export class ProvisionsApiModule {}
