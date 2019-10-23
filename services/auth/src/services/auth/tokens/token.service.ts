import {TokenDto} from "./token.dto";
import {JwtService} from "@nestjs/jwt";
import {Injectable} from "@nestjs/common";
import {Token} from "../../../data/tokens/token.model";
import {TokenDao} from "../../../data/tokens/token.dao";

@Injectable()
export class TokenService {
    token_validity = 3600;
    refresh_validity = 5 * this.token_validity;

    constructor(
        private readonly tokenDao: TokenDao,
        private readonly jwtService: JwtService,
    ) {}

    async list(params?: any): Promise<TokenDto[]> {
        const tokens: Token[] = await this.tokenDao.list(params);
        return tokens.map((token: Token) => this.toDto(token));
    }

    async findById(id: string): Promise<TokenDto> {
        const token: Token = await this.tokenDao.findById(id);
        return this.toDto(token);
    }

    async create(user: string): Promise<TokenDto> {
        const accessToken: string = this.jwtService.sign({ sub: user },
            { expiresIn: this.token_validity });
        const refreshToken: string = this.jwtService.sign({ sub: user },
            { expiresIn: this.token_validity });
        const tokenValidity: Date = new Date(Date.now() + this.token_validity);
        const refreshValidity: Date = new Date(Date.now() + this.refresh_validity);
        const token: Token = await this.tokenDao.create({
            refreshValidity,
            tokenValidity,
            refreshToken,
            accessToken,
            user
        });
        return this.toDto(token);
    }

    async delete(id: string): Promise<string> {
        const token: Token = await this.tokenDao.delete(id);
        return token.id;
    }

    private toDto({ id, user, accessToken, refreshToken, tokenValidity, refreshValidity }: Token): TokenDto {
        return { id, user, accessToken, refreshToken, tokenValidity, refreshValidity };
    }
}
