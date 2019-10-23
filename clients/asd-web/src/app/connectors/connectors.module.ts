import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class ConnectorsModule {}
