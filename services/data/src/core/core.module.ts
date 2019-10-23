import {Module} from "@nestjs/common";
import {CoreDataModule} from "../data/core.data.module";
import {UsersServiceModule} from "../services/users/users/users.service.module";
import {TokensServiceModule} from "../../../auth/src/services/auth/tokens/tokens.service.module";

@Module({
    imports: [
        CoreDataModule,
        UsersServiceModule,
        TokensServiceModule,
    ],
})
export class CoreModule {}
