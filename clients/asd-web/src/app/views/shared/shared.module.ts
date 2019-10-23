import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {SafeUrlPipe} from "./pipes/safe-url.pipe";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ConfirmationModalComponent} from "./components/confirmation.modal.component";
import {ConfirmationService} from "./services/confirmation.service";

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
    ConfirmationModalComponent,
  ]
})
export class SharedModule {}
