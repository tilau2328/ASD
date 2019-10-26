import {Injectable} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmationModalComponent} from "../components/confirmation.modal.component";

@Injectable()
export class ConfirmationService {
  constructor(private modalService: NgbModal) {}

  async confirm(): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    return !!(await modalRef.result);
  }
}
