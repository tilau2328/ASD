import { createParamDecorator } from '@nestjs/common';
import {UserDto} from "../../services/users/users/user.dto";

export const CurrentUser: () => ParameterDecorator = createParamDecorator(
    (req): UserDto => req.user,
);
