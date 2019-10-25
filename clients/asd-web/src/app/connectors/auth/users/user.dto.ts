export interface UserDto {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly avatarUrl?: string;
}

export interface UpdateUserDto {
  readonly email?: string;
  readonly username?: string;
  readonly password?: string;
  readonly avatarUrl?: string;
}

export interface UserEventDto {
  readonly type: string;
  readonly payload: UserDto;
}
