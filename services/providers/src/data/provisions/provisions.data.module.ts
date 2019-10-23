import {Module} from "@nestjs/common";
import {ProvisionDao} from "./provision.dao";
import {MongooseModule} from "@nestjs/mongoose";
import {ProvisionSchema} from "./provision.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Provision', schema: ProvisionSchema },
        ]),
    ],
    providers: [ProvisionDao],
    exports: [ProvisionDao]
})
export class ProvisionsDataModule {}
