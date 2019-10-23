import {Injectable} from "@angular/core";
import {UserDto} from "./dto/user.dto";
import {HttpClient} from "@angular/common/http";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserConnector {
  url = 'http://localhost:3000/auth/users';

  constructor(private readonly http: HttpClient) {}

  async updateUser(updateUserDto: UpdateUserDto): Promise<UserDto> {
    return this.http.patch(this.getUrl(), updateUserDto).toPromise();
  }

  async listUsers(): Promise<UserDto[]> {
    return this.http.get<UserDto[]>(this.getUrl()).toPromise();
  }

  async userDetails(id: string): Promise<UserDto> {
    return this.http.get<UserDto>(this.getUrl(id)).toPromise();
  }

  async deleteUser(id: string): Promise<string> {
    return this.http.delete<string>(this.getUrl(id)).toPromise();
  }

  private getUrl(id?: string) {
    return this.url + id ? `/${id}` : '';
  }
}
