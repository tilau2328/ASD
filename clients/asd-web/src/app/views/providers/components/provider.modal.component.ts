import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProviderDto} from "../../../modules/providers/dto/provider.dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProviderService} from "../../../modules/providers/provider.service";

@Component({
  selector: 'app-provider-modal',
  templateUrl: './provider.modal.component.html',
  styleUrls: ['./provider.modal.component.css']
})
export class ProviderModalComponent implements OnInit {
  @Input() provider: ProviderDto;
  showSecret: boolean = false;
  providerForm: FormGroup;
  providers: string[];

  constructor(
    private readonly fb: FormBuilder,
    public readonly activeModal: NgbActiveModal,
    private readonly providerService: ProviderService,
  ) {
    providerService.providerEnum$.subscribe((providers: string[]) => this.providers = providers);
  }

  get isUpdate(): boolean {
    return !!this.provider;
  }

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(): Promise<void> {
    if (this.providerForm.valid) {
      await this.providerService.create(this.providerForm.getRawValue());
      this.activeModal.close();
    }
  }

  onReset(): void {
    this.providerForm.reset();
  }

  private initForm(): void {
    this.providerForm = this.fb.group({
      'name': this.fb.control(this.provider ? this.provider.name : '', [Validators.required]),
      'clientId': this.fb.control(this.provider ? this.provider.clientId : '', [Validators.required]),
      'clientSecret': this.fb.control(this.provider ? this.provider.clientSecret : '', [Validators.required]),
      'tokenUrl': this.fb.control(this.provider ? this.provider.tokenUrl : '', [Validators.required]),
      'authUrl': this.fb.control(this.provider ? this.provider.authUrl : '', [Validators.required]),
      'userUrl': this.fb.control(this.provider ? this.provider.userUrl : '', [Validators.required]),
      'scope': this.fb.control(this.provider ? this.provider.scope : '', [Validators.required]),
    });
  }
}
