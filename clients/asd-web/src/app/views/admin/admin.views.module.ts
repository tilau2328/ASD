import {NgModule} from "@angular/core";
import {adminRoutes} from "./admin.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
})
export class AdminViewsModule {}
