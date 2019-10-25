import {Injectable} from "@angular/core";
import {CreateSignUpDto, SignUpDto} from "../../../connectors/auth/sign-ups/sign-up.dto";
import {SignUpsConnector} from "../../../connectors/auth/sign-ups/sign-ups.connector";
import {TokenDto} from "../../../connectors/auth/tokens/token.dto";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class SignUpService {
  constructor(
    private readonly authService: AuthService,
    private readonly signUpConnector: SignUpsConnector,
  ) {}

  async signUp(input: CreateSignUpDto): Promise<void> {
    const token: TokenDto = await this.signUpConnector.create(input).toPromise();
    console.log(token);
    await this.authService.setToken(token);
  }

  getSignUp(id: string): Observable<SignUpDto> {
    return this.signUpConnector.getSignUp(id);
  }

  listSignUps(): Observable<SignUpDto[]> {
    return this.signUpConnector.listSignUps();
  }
}
