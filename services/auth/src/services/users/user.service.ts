import { Injectable } from "@nestjs/common";
import {User} from "../../data/users/user.model";
import {UserDao} from "../../data/users/user.dao";
import { UserDto, CreateUserDto, UpdateUserDto } from "./user.dto";

@Injectable()
export class UserService {
    constructor(private readonly userDao: UserDao) {}

    async list(params?: any): Promise<UserDto[]> {
        const users: User[] = await this.userDao.list(params);
        return users.map((user: User) => this.toDto(user));
    }

    async findById(id: string): Promise<UserDto> {
        const user: User = await this.userDao.findById(id);
        return this.toDto(user);
    }

    async create(createDto: CreateUserDto): Promise<UserDto> {
        const user: User = await this.userDao.create({ ...createDto });
        return this.toDto(user);
    }

    async update(id: string, updateDto: UpdateUserDto): Promise<UserDto> {
        const user: User = await this.userDao.update(id, updateDto);
        return this.toDto(user);
    }

    async delete(id: string): Promise<string> {
        const user: User = await this.userDao.delete(id);
        return user.id;
    }

    private toDto({ id, email, username, avatarUrl }: User): UserDto {
        return { id, email, username, avatarUrl };
    }
}
