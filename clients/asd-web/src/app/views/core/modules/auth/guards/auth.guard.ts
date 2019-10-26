import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  async canActivate(): Promise<boolean> {
    if (!await this.auth.isLoggedIn.toPromise()) {
      await this.router.navigate(['auth', '/sign-up']);
      return false;
    }
    return true;
  }
}
