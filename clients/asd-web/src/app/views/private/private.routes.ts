import {Route} from "@angular/router";

export const privateRoutes: Route[] = [
  { path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.views.module')
        .then(mod => mod.ProfileViewsModule) },
];
