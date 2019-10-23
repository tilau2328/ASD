import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ProviderPageComponent} from "./pages/provider.page.component";
import {ProvidersPageComponent} from "./pages/providers.page.component";

const routes: Route[] = [
  { path: '', pathMatch: 'full', component: ProvidersPageComponent },
  { path: ':id', pathMatch: 'full', component: ProviderPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule {}
