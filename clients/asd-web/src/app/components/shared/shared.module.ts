import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {SafeUrlPipe} from "./pipes/safe-url.pipe";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListFilterPipe} from "./pipes/list-filter.pipe";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemListComponent} from "./components/item.list.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ConfirmationService} from "./services/confirmation.service";
import {ConfirmationModalComponent} from "./components/confirmation.modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxDropzoneModule
  ],
  declarations: [
    SafeUrlPipe,
    ListFilterPipe,
    ItemListComponent,
    ConfirmationModalComponent,
  ],
  providers: [
    ConfirmationService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxDropzoneModule,

    SafeUrlPipe,
    ListFilterPipe,
    ItemListComponent,
    ConfirmationModalComponent,
  ]
})
export class SharedModule {}
