import { Module } from '@nestjs/common';
import { SignInController } from './sign-in.controller';
import {SignInsServiceModule} from "../../../services/auth/sign-ins/sign-ins.service.module";

@Module({
    imports: [SignInsServiceModule],
    controllers: [SignInController]
})
export class SignInsApiModule {}
