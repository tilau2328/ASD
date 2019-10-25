import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {
  CreateProvisionDto,
  ProvisionDto,
  UpdateProvisionDto
} from "../../../connectors/providers/provisions/provision.dto";
import {ProvisionsConnector} from "../../../connectors/providers/provisions/provisions.connector";

@Injectable()
export class ProvisionService {
  provisions$: Observable<ProvisionDto[]>;
  currentProvision$: Observable<ProvisionDto>;

  constructor(private readonly provisionConnector: ProvisionsConnector) {}

  listProvisions(): Observable<ProvisionDto[]> {
    if (!this.provisions$) {
      this.provisions$ = this.provisionConnector.listProvisions();
    }
    return this.provisions$;
  }

  getProvision(id: string): Observable<ProvisionDto> {
    if (!this.provisions$) {
      this.currentProvision$ = this.provisionConnector.getProvision(id);
    }
    return this.currentProvision$;
  }

  createProvision(input: CreateProvisionDto): Observable<ProvisionDto> {
    return this.provisionConnector.create(input);
  }

  updateProvision(id: string, input: UpdateProvisionDto): Observable<ProvisionDto> {
    return this.provisionConnector.update(id, input);
  }

  deleteProvision(id: string): Observable<string> {
    return this.provisionConnector.delete(id);
  }
}
