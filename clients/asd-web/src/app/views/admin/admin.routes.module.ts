import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

const adminRoutes: Route[] = [
  { path: 'users',
    loadChildren: () =>
      import('./users/user.views.module')
        .then(mod => mod.UserViewsModule) },
  { path: 'clients',
    loadChildren: () =>
      import('./clients/client.views.module')
        .then(mod => mod.ClientViewsModule) },
  { path: 'providers',
    loadChildren: () =>
      import('./providers/provider.views.module')
        .then(mod => mod.ProviderViewsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutesModule {}
