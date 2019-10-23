import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {SignUpPageComponent} from "./modules/sign-ups/pages/sign-up.page.component";
import {SignInPageComponent} from "./modules/sign-ins/pages/sign-in.page.component";
import {SignUpsPageComponent} from "./modules/sign-ups/pages/sign-ups.page.component";
import {SignInsPageComponent} from "./modules/sign-ins/pages/sign-ins.page.component";

const routes: Route[] = [
  { path: 'sign-in', pathMatch: 'full', component: SignInPageComponent },
  { path: 'sign-ins', pathMatch: 'full', component: SignInsPageComponent },
  { path: 'sign-up', pathMatch: 'full', component: SignUpPageComponent },
  { path: 'sign-ups', pathMatch: 'full', component: SignUpsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
