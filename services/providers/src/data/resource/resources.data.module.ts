import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ResourceSchema} from "./resource.schema";
import {ResourceDao} from "./resource.dao";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Resource', schema: ResourceSchema },
        ]),
    ],
    providers: [ResourceDao],
    exports: [ResourceDao]
})
export class ResourcesDataModule {}
