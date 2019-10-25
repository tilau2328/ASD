import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {setAccessToken} from "./auth.utils";
import {UserDto} from "../../../connectors/auth/users/user.dto";
import {TokenDto} from "../../../connectors/auth/tokens/token.dto";
import {UsersConnector} from "../../../connectors/auth/users/users.connector";
import {TokensConnector} from "../../../connectors/auth/tokens/tokens.connector";

@Injectable()
export class AuthService {
  private currentUser: Subject<UserDto>;

  constructor(
    private readonly userConnector: UsersConnector,
    private readonly tokenConnector: TokensConnector,
  ) {
    this.currentUser = new Subject();
  }

  get user(): Observable<UserDto> {
    return this.currentUser.asObservable();
  }

  get isLoggedIn(): Observable<boolean> {
    return this.currentUser.asObservable().pipe(map((user: UserDto) => !!user));
  }

  async authenticate(): Promise<void> {
    try {
      const me: UserDto = await this.userConnector.getMe().toPromise();
      if (me) this.currentUser.next(me);
    } catch (e) {
      console.log(e);
    }
  }

  async refreshToken(): Promise<void> {

  }

  async setToken(token: TokenDto): Promise<void> {
    setAccessToken(token);
    await this.authenticate();
  }
}
