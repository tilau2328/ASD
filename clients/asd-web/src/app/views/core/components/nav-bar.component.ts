import {Component} from '@angular/core';
import {
  faAddressCard,
  faSignOutAlt,
  faSignInAlt,
  faUser,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import {Observable, of} from "rxjs";
import {UserDto} from "../../../connectors/auth/users/user.dto";
import {AuthService} from "../../../services/auth/auth/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLoggedIn$: Observable<boolean>;
  isCollapsed: boolean = true;
  user$: Observable<UserDto>;

  constructor(private readonly authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.user$ = this.authService.user;
  }

  // Icons
  faAddressCard = faAddressCard;
  faSignOut = faSignOutAlt;
  faSignIn = faSignInAlt;
  faUser = faUser;
  faLink = faLink;

  async logout() {
    await this.authService.logout();
  }
}
