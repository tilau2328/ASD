import {Route} from '@angular/router';
import {SignUpPageComponent} from "./sign-up.page.component";
import {SignUpsPageComponent} from "./sign-ups.page.component";

export const signUpRoutes: Route[] = [
  { path: 'sign-up', pathMatch: 'full', component: SignUpPageComponent },
  { path: 'sign-ups', pathMatch: 'full', component: SignUpsPageComponent },
];
