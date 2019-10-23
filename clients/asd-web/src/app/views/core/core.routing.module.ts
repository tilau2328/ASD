import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home.page.component';
import {NotFoundPageComponent} from './pages/not-found.page.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'auth',
    loadChildren: () =>
      import('../auth/auth.views.module')
        .then(mod => mod.AuthViewsModule) },
  { path: 'users',
    loadChildren: () =>
      import('../users/user.views.module')
        .then(mod => mod.UserViewsModule) },
  { path: 'providers',
    loadChildren: () =>
      import('../providers/provider.views.module')
        .then(mod => mod.ProviderViewsModule) },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
