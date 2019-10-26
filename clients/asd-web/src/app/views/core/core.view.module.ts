import {NgModule} from "@angular/core";
import {coreRoutes} from "./core.routes";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./home.page.component";
import {NotFoundPageComponent} from "./not-found.page.component";
import {CoreComponentModule} from "../../components/core/core.component.module";

@NgModule({
  imports: [
    CoreComponentModule,
    RouterModule.forRoot(coreRoutes),
  ],
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
  ],
  exports: [
    CoreComponentModule,
  ]
})
export class CoreViewModule {}
