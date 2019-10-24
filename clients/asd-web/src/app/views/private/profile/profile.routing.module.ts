import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ProfilePageComponent} from "./pages/profile.page.component";

const routes: Route[] = [
  { path: '', pathMatch: 'full', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
