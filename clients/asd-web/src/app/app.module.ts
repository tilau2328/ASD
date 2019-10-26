import { NgModule } from '@angular/core';
import { CoreViewModule } from "./views/core/core.view.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/core/app.component";

@NgModule({
  imports: [
    BrowserModule,
    CoreViewModule,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
