import {Controller, Delete, Get, Param, Post} from "@nestjs/common";
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

    @Post('refresh/:refreshToken')
    async refreshToken(@Param('refreshToken') refreshToken: string): Promise<TokenDto> {
        return this.tokenService.refreshToken(refreshToken);
    }

    @Delete('revoke/:refreshToken')
    async revokeToken(@Param('refreshToken') refreshToken: string): Promise<string> {
        return this.tokenService.revokeToken(refreshToken);
    }

    @Delete(':id')
    async deleteToken(@Param('id') id: string): Promise<string> {
        return this.tokenService.delete(id);
    }
}
