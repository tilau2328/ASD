import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb://localhost/asd', {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            }
        ),
    ],
})
export class AppDataModule {}
