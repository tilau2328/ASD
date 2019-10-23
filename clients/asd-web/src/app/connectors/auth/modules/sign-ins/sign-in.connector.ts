import {Injectable} from "@angular/core";
import {CreateSignUpDto, SignUpDto} from "../../dto/sign-up.dto";
import {HttpClient} from "@angular/common/http";
import {CreateSignInDto} from "../../dto/sign-in.dto";

@Injectable()
export class AuthConnector {
  url = 'http://localhost:3000/auth';

  constructor(private readonly http: HttpClient) {}

  async signIn(createSignInDto: CreateSignInDto) {
    return this.http.post(`${this.url}/sign-ins`, createSignInDto).toPromise();
  }

  async signUp(createSignUpDto: CreateSignUpDto) {
    console.log(createSignUpDto);
    return this.http.post(`${this.url}/sign-ups`, createSignUpDto).toPromise();
  }

  async signIns() {
    return this.http.get(`${this.url}/sign-in`).toPromise();
  }

  async signUps(): Promise<SignUpDto[]> {
    return this.http.get<SignUpDto[]>(`${this.url}/sign-up`).toPromise();
  }
}
