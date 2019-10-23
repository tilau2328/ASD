import {Component, OnInit} from '@angular/core';
import {
  faAddressCard,
  faSignOutAlt,
  faSignInAlt,
  faUser, faLink,
} from '@fortawesome/free-solid-svg-icons';
import {Observable, of} from "rxjs";
import {UserDto} from "../../../modules/auth/modules/users/dto/user.dto";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = of(false);
  isCollapsed: boolean = true;
  user: UserDto;

  // Icons
  faAddressCard = faAddressCard;
  faSignOut = faSignOutAlt;
  faSignIn = faSignInAlt;
  faUser = faUser;
  faLink = faLink;

  ngOnInit(): void {

  }

  logout() {

  }
}
