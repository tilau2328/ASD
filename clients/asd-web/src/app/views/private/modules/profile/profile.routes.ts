import {Route} from "@angular/router";
import {ProfilePageComponent} from "./profile.page.component";

export const profileRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ProfilePageComponent },
];
