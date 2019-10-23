export interface UserDto {
    readonly id: string;
    readonly email: string;
    readonly username: string;
    readonly avatarUrl?: string;
}

export interface CreateUserDto {
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly avatarUrl?: string;
}

export interface UpdateUserDto {
    readonly email?: string;
    readonly username?: string;
    readonly password?: string;
    readonly avatarUrl?: string;
}
