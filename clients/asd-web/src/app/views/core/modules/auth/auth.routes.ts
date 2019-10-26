import {Route} from '@angular/router';

export const authRoutes: Route[] = [
  { path: '', loadChildren: () =>
    import('./modules/sign-ins/sign-ins.views.module')
      .then(mod => mod.SignInsViewsModule) },
  { path: '', loadChildren: () =>
    import('./modules/sign-ups/sign-ups.views.module')
      .then(mod => mod.SignUpsViewsModule) },
];
