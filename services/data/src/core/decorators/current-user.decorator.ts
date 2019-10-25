import { createParamDecorator } from '@nestjs/common';
import {UserDto} from "../../connectors/auth/users/user.api";

export const CurrentUser: () => ParameterDecorator = createParamDecorator(
    (req): UserDto => req.user,
);
