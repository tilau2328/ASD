import {Injectable} from "@nestjs/common";
import {TokenDto} from "../tokens/token.dto";
import {UserDto} from "../../users/user.dto";
import {TokenService} from "../tokens/token.service";
import {UserService} from "../../users/user.service";
import {CreateSignUpDto, SignUpDto} from "./sign-up.dto";
import {SignUp} from "../../../data/sign-ups/sign-up.model";
import {SignUpDao} from "../../../data/sign-ups/sign-up.dao";
import {ConnectionConnector} from "../../../connectors/providers/connection/connection.connector";
import {ConnectionDto, CreateConnectionDto} from "../../../connectors/providers/connection/connection.api";

@Injectable()
export class SignUpService {
    constructor(
        private readonly signUpDao: SignUpDao,
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
        private readonly connectionConnector: ConnectionConnector,
    ) {}

    async list(params?: any): Promise<SignUpDto[]> {
        const signUps: SignUp[] = await this.signUpDao.list(params);
        return signUps.map((signUp: SignUp) => this.toDto(signUp));
    }

    async findById(id: string): Promise<SignUpDto> {
        const signUp: SignUp = await this.signUpDao.findById(id);
        return this.toDto(signUp);
    }

    async signUp(createSignUpDto: CreateSignUpDto): Promise<TokenDto> {
        const { email, username, password, connections } = createSignUpDto;
        const user: UserDto = await this.userService.create({ email, username, password });
        let connectionIds: string[] = [];
        if (connections) {
            const connectionDto: ConnectionDto[] = await Promise.all(connections
                .map((connection: CreateConnectionDto) =>
                    this.connectionConnector.createConnection(connection).toPromise()));
            connectionIds = connectionDto.map((connection: ConnectionDto) => connection.id);
        }
        const token: TokenDto = await this.tokenService.create(user.id);
        await this.signUpDao.create({
            email, username, password,
            connections: connectionIds,
            user: user.id, token: token.id,
        });
        return token;
    }

    async delete(id: string): Promise<string> {
        const signUp: SignUp = await this.signUpDao.delete(id);
        return signUp.id;
    }

    private toDto({ id, email, username, connections, token, user }: SignUp): SignUpDto {
        return { id, email, username, connections, token, user };
    }
}
