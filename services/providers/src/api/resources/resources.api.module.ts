import {Module} from "@nestjs/common";
import {ResourceController} from "./resource.controller";
import {ResourcesServiceModule} from "../../services/resources/resources.service.module";

@Module({
    imports: [ResourcesServiceModule],
    controllers: [ResourceController]
})
export class ResourcesApiModule {}

