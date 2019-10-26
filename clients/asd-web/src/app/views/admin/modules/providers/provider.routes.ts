import {Route} from "@angular/router";
import {ResourcePageComponent} from "./resource.page.component";
import {ProviderPageComponent} from "./provider.page.component";
import {ProvidersPageComponent} from "./providers.page.component";

export const providerRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ProvidersPageComponent },
  { path: ':id', pathMatch: 'full', component: ProviderPageComponent, outlet: 'provider-resource' },
  { path: ':provider/resources/:id', pathMatch: 'full', component: ResourcePageComponent, outlet: 'provider-resource' }
];
