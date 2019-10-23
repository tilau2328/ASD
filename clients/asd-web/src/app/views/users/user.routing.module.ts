import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {UserPageComponent} from "./pages/user.page.component";
import {UsersPageComponent} from "./pages/users.page.component";

const routes: Route[] = [
  { path: '', pathMatch: 'full', component: UsersPageComponent },
  { path: 'profile', loadChildren: () =>
      import('./modules/profile/profile.views.module')
        .then(mod => mod.ProfileViewsModule) },
  { path: ':id', pathMatch: 'full', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
