import {PassportStrategy} from "@nestjs/passport";
import {Injectable} from "@nestjs/common";
import {Strategy, ExtractJwt} from "passport-jwt";
import {UserConnector} from "../../connectors/auth/users/user.connector";
import {UserDto} from "../../connectors/auth/users/user.api";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private userConnector: UserConnector) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: "secret",
        });
    }

    async validate(payload: any): Promise<UserDto> {
        return await this.userConnector.get(payload.sub);
    }
}
