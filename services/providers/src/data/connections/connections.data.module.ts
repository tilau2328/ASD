import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ConnectionSchema} from "./connection.schema";
import {ConnectionDao} from "./connection.dao";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Connection', schema: ConnectionSchema },
        ]),
    ],
    providers: [ConnectionDao],
    exports: [ConnectionDao]
})
export class ConnectionsDataModule {}
