import {PassportStrategy} from "@nestjs/passport";
import {Injectable} from "@nestjs/common";
import {Strategy, ExtractJwt} from "passport-jwt";
import { UserDto } from "src/services/users/users/user.dto";
import { UserService } from "src/services/users/users/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: "secret",
        });
    }

    async validate(payload: any): Promise<UserDto> {
        return await this.userService.findById(payload.sub);
    }
}
