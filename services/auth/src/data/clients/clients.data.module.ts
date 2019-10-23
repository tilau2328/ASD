import {Module} from "@nestjs/common";
import {AppDataModule} from "../app.data.module";
import {MongooseModule} from "@nestjs/mongoose";
import {ClientSchema} from "./client.schema";
import {ClientDao} from "./client.dao";

@Module({
    imports: [
        AppDataModule,
        MongooseModule.forFeature([
            { name: 'Client', schema: ClientSchema },
        ]),
    ],
    providers: [ClientDao],
    exports: [ClientDao]
})
export class ClientsDataModule {}
