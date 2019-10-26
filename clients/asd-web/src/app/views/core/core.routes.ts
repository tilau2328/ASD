import {Route} from '@angular/router';
import {HomePageComponent} from './home.page.component';
import {NotFoundPageComponent} from './not-found.page.component';

export const coreRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.views.module')
        .then(mod => mod.AuthViewsModule) },
  { path: 'admin',
    loadChildren: () =>
      import('../admin/admin.views.module')
        .then(mod => mod.AdminViewsModule) },
  { path: 'private',
    loadChildren: () =>
      import('../private/private.views.module')
        .then(mod => mod.PrivateViewsModule) },
  { path: '**', component: NotFoundPageComponent }
];
