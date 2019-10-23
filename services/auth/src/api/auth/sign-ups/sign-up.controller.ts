import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {CreateSignUpDto, SignUpDto} from "../../../services/auth/sign-ups/sign-up.dto";
import {SignUpService} from "../../../services/auth/sign-ups/sign-up.service";
import {TokenDto} from "../../../services/auth/tokens/token.dto";

@Controller('auth/sign-up')
export class SignUpController {
    constructor(private readonly signUpService: SignUpService) {}

    @Get()
    async listSignUps(): Promise<SignUpDto[]> {
        return this.signUpService.list();
    }

    @Post()
    async signUp(@Body() createSignUpDto: CreateSignUpDto): Promise<TokenDto> {
        return this.signUpService.signUp(createSignUpDto);
    }
}
