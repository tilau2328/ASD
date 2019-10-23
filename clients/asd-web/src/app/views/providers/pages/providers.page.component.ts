import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {faPlus, faEdit, faTimes} from "@fortawesome/free-solid-svg-icons";
import {ProviderService} from "../../../modules/providers/provider.service";
import {ProviderModalComponent} from "../components/provider.modal.component";
import {ProviderDto} from "../../../modules/providers/dto/provider.dto";
import {ConfirmationService} from "../../shared/services/confirmation.service";

@Component({
  selector: 'app-providers-page',
  templateUrl: './providers.page.component.html',
  styleUrls: ['./providers.page.component.css']
})
export class ProvidersPageComponent implements OnInit {
  providers$: Observable<ProviderDto[]>;
  filter: FormControl;
  faTimes = faTimes;
  faPlus = faPlus;
  faEdit = faEdit;

  constructor(
    private readonly modalService: NgbModal,
    private readonly providerService: ProviderService,
    private readonly confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.providers$ = this.providerService.list();
    this.filter = new FormControl();
  }

  createProvider(): void {
    this.modalService.open(ProviderModalComponent, {
      backdrop : 'static',
    } as NgbModalOptions);
  }

  editProvider(provider: ProviderDto) {
    const modalRef = this.modalService.open(ProviderModalComponent, {
      backdrop : 'static',
      keyboard : false
    } as NgbModalOptions);
    modalRef.componentInstance.provider = provider;
  }

  async deleteProvider(id: string): Promise<void> {
    if (await this.confirmationService.confirm()) {
      await this.providerService.delete(id);
    }
  }
}
