import {Route} from '@angular/router';
import {SignInPageComponent} from "./sign-in.page.component";
import {SignInsPageComponent} from "./sign-ins.page.component";

export const signInRoutes: Route[] = [
  { path: 'sign-in', pathMatch: 'full', component: SignInPageComponent },
  { path: 'sign-ins', pathMatch: 'full', component: SignInsPageComponent },
];
