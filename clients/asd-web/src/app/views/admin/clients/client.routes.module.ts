import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ClientsPageComponent} from "./pages/clients.page.component";
import {ClientPageComponent} from "./pages/client.page.component";
import {ProvisionPageComponent} from "./pages/provision.page.component";

const routes: Route[] = [
  { path: '', component: ClientsPageComponent },
  { path: '/:id', pathMatch: 'full', component: ClientPageComponent, outlet: 'client-provision' },
  { path: '/:client/provisions/:id', pathMatch: 'full', component: ProvisionPageComponent, outlet: 'client-provision' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutesModule {}
