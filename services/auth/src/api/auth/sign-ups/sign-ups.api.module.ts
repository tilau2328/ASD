import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import {SignUpsServiceModule} from "../../../services/auth/sign-ups/sign-ups.service.module";

@Module({
    imports: [SignUpsServiceModule],
    controllers: [SignUpController],
})
export class SignUpsApiModule {}
