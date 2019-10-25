import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {UsersConnector} from "../../../connectors/auth/users/users.connector";
import {UpdateUserDto, UserDto} from "../../../connectors/auth/users/user.dto";

@Injectable()
export class UserService {
  users$: Observable<UserDto[]>;
  currentUser$: Observable<UserDto>;

  constructor(private readonly userConnector: UsersConnector) {}

  listUsers(): Observable<UserDto[]> {
    if (!this.users$) {
      this.users$ = this.userConnector.listUsers();
    }
    return this.users$;
  }

  getUser(id: string): Observable<UserDto> {
    if (!this.users$) {
      this.currentUser$ = this.userConnector.getUser(id);
    }
    return this.currentUser$;
  }

  updateUser(id: string, input: UpdateUserDto): Observable<UserDto> {
    return this.userConnector.update(id, input);
  }

  deleteUser(id: string): Observable<string> {
    return this.userConnector.delete(id);
  }
}
