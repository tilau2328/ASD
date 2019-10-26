import {Route} from "@angular/router";
import {ClientsPageComponent} from "./clients.page.component";
import {ClientPageComponent} from "./client.page.component";
import {ProvisionPageComponent} from "./provision.page.component";

export const clientRoutes: Route[] = [
  { path: '', component: ClientsPageComponent },
  { path: ':id', pathMatch: 'full', component: ClientPageComponent, outlet: 'client-provision' },
  { path: ':client/provisions/:id', pathMatch: 'full', component: ProvisionPageComponent, outlet: 'client-provision' },
];
