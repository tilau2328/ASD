import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateSignInDto, SignInDto} from "../../../services/auth/sign-ins/sign-in.dto";
import {SignInService} from "../../../services/auth/sign-ins/sign-in.service";
import {TokenDto} from "../../../services/auth/tokens/token.dto";

@Controller('auth/sign-in')
export class SignInController {
    constructor(private readonly signInService: SignInService) {}

    @Get()
    async listSignIns(): Promise<SignInDto[]> {
        return this.signInService.list();
    }

    @Post()
    async signIn(@Body() createSignInDto: CreateSignInDto): Promise<TokenDto> {
        return this.signInService.signIn(createSignInDto);
    }
}
