import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UserService} from "../../services/users/user.service";
import {CreateUserDto, UpdateUserDto, UserDto} from "../../services/users/user.dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async listUsers(): Promise<UserDto[]> {
        return this.userService.list();
    }

    @Get(':id')
    async userDetails(@Param('id') id: string): Promise<UserDto>  {
        return this.userService.findById(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return this.userService.create(createUserDto);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<UserDto> {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<string> {
        return this.userService.delete(id);
    }
}
