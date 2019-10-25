import {Injectable} from "@angular/core";
import {SignInsConnector} from "../../../connectors/auth/sign-ins/sign-ins.connector";
import {CreateSignInDto, SignInDto} from "../../../connectors/auth/sign-ins/sign-in.dto";
import {TokenDto} from "../../../connectors/auth/tokens/token.dto";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class SignInService {
  constructor(
    private readonly authService: AuthService,
    private readonly signInConnector: SignInsConnector,
  ) {}

  listSignIns(): Observable<SignInDto[]> {
    return this.signInConnector.listSignIns();
  }

  async signIn(input: CreateSignInDto): Promise<void> {
    const token: TokenDto = await this.signInConnector.create(input).toPromise();
    console.log(token);
    await this.authService.setToken(token);
  }
}
