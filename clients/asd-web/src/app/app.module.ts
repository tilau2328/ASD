import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreViewModule } from "./views/core/core.view.module";
import { AppComponent } from "./views/core/components/app.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreViewModule,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
