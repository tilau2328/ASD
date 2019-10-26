import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {getRefreshToken, hasAccessToken, setAccessToken} from "./auth.utils";
import {UserDto} from "../../../connectors/auth/users/user.dto";
import {TokenDto} from "../../../connectors/auth/tokens/token.dto";
import {UsersConnector} from "../../../connectors/auth/users/users.connector";
import {TokensConnector} from "../../../connectors/auth/tokens/tokens.connector";

@Injectable()
export class AuthService {
  private currentUser: Subject<UserDto>;
  private loggedIn: BehaviorSubject<boolean>;

  constructor(
    private readonly userConnector: UsersConnector,
    private readonly tokenConnector: TokensConnector,
  ) {
    this.currentUser = new Subject();
    this.loggedIn = new BehaviorSubject(hasAccessToken());
  }

  get user(): Observable<UserDto> {
    return this.currentUser.asObservable();
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  async authenticate(): Promise<void> {
    try {
      const me: UserDto = await this.userConnector.getMe().toPromise();
      if (me) this.currentUser.next(me);
    } catch (e) {
      console.log(e);
    }
  }

  async logout(): Promise<void> {
    setAccessToken();
  }

  async refreshToken(): Promise<void> {
    let token: TokenDto;
    const refreshToken: string = getRefreshToken();
    if (refreshToken) {
      token = await this.tokenConnector.refreshToken(refreshToken).toPromise();
    }
    setAccessToken(token);
  }

  async setToken(token: TokenDto): Promise<void> {
    setAccessToken(token);
    await this.authenticate();
  }
}
