import {Route} from "@angular/router";
import {UserPageComponent} from "./user.page.component";
import {UsersPageComponent} from "./users.page.component";

export const userRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: UsersPageComponent },
  { path: ':id', pathMatch: 'full', component: UserPageComponent },
];
