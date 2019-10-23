import {Module} from "@nestjs/common";
import {ResourceService} from "./resource.service";
import {ResourcesDataModule} from "../../data/resource/resources.data.module";

@Module({
    imports: [ResourcesDataModule],
    providers: [ResourceService],
    exports: [ResourceService],
})
export class ResourcesServiceModule {}
