import { Module } from '@nestjs/common';
import { TokenController } from './token.controller';
import {TokensServiceModule} from "../../../services/auth/tokens/tokens.service.module";

@Module({
    imports: [TokensServiceModule],
    controllers: [TokenController],
})
export class TokensApiModule {}
