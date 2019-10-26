import {Route} from "@angular/router";

export const adminRoutes: Route[] = [
  { path: 'users',
    loadChildren: () =>
      import('./modules/users/user.views.module')
        .then(mod => mod.UserViewsModule) },
  { path: 'clients',
    loadChildren: () =>
      import('./modules/clients/client.views.module')
        .then(mod => mod.ClientViewsModule) },
  { path: 'providers',
    loadChildren: () =>
      import('./modules/providers/provider.views.module')
        .then(mod => mod.ProviderViewsModule) },
];
