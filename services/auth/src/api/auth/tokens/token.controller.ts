import {Controller, Delete, Get, Param} from "@nestjs/common";
import {TokenDto} from "../../../services/auth/tokens/token.dto";
import {TokenService} from "../../../services/auth/tokens/token.service";

@Controller('auth/tokens')
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    @Get()
    async listTokens(): Promise<TokenDto[]> {
        return this.tokenService.list();
    }

    @Get(':id')
    async getTokens(@Param('id') id: string): Promise<TokenDto> {
        return this.tokenService.findById(id);
    }

    @Delete(':id')
    async deleteToken(@Param('id') id: string): Promise<string> {
        return this.tokenService.delete(id);
    }
}
