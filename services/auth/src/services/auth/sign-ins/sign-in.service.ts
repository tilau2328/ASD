import {Injectable} from "@nestjs/common";
import {TokenDto} from "../tokens/token.dto";
import {User} from "../../../data/users/user.model";
import {TokenService} from "../tokens/token.service";
import {UserDao} from "../../../data/users/user.dao";
import {CreateSignInDto, SignInDto} from "./sign-in.dto";
import {SignIn} from "../../../data/sign-ins/sign-in.model";
import {SignInDao} from "../../../data/sign-ins/sign-in.dao";
import {ConnectionDto} from "../../../connectors/providers/connection/connection.api";
import {ConnectionConnector} from "../../../connectors/providers/connection/connection.connector";

@Injectable()
export class SignInService {
    constructor(
        private readonly userDao: UserDao,
        private readonly signInDao: SignInDao,
        private readonly tokenService: TokenService,
        private readonly connectionConnector: ConnectionConnector,
    ) {}

    async list(params?: any): Promise<SignInDto[]> {
        const signIns: SignIn[] = await this.signInDao.list(params);
        return signIns.map((signIn: SignIn) => signIn.toJSON());
    }

    async findById(id: string): Promise<SignInDto> {
        const signIn: SignIn = await this.signInDao.findById(id);
        return signIn.toJSON();
    }

    async signIn({ username, password, connection }: CreateSignInDto): Promise<TokenDto> {
        let user: User;
        let connectionId: string;
        if (connection) {
            const connectionDto: ConnectionDto =
                await this.connectionConnector.updateConnection(connection);
            user = await this.userDao.findById(connectionDto.user);
            connectionId = connectionDto.id;
        } else {
            user = await this.userDao.findByUsername(username)
        }
        if (!user) { return; }
        if (!user.comparePassword(password)) { return; }
        const token: TokenDto = await this.tokenService.create(user.id);
        await this.signInDao.create({ username, connection: connectionId, token: token.id });
        return token;
    }

    async delete(id: string): Promise<string> {
        const signIn: SignIn = await this.signInDao.delete(id);
        return signIn.id;
    }
}
