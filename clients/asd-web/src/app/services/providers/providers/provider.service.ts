import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ProvidersConnector} from "../../../connectors/providers/providers/providers.connector";
import {CreateProviderDto, ProviderDto, UpdateProviderDto} from "../../../connectors/providers/providers/provider.dto";

@Injectable()
export class ProviderService {
  providers$: Observable<ProviderDto[]>;
  currentProvider$: Observable<ProviderDto>;

  constructor(private readonly providerConnector: ProvidersConnector) {}

  list(): Observable<ProviderDto[]> {
    if (!this.providers$) {
      this.providers$ = this.providerConnector.listProviders();
    }
    return this.providers$;
  }

  get(id: string): Observable<ProviderDto> {
    if (!this.providers$) {
      this.currentProvider$ = this.providerConnector.getProvider(id);
    }
    return this.currentProvider$;
  }

  create(input: CreateProviderDto): Observable<ProviderDto> {
    return this.providerConnector.create(input);
  }

  update(id: string, input: UpdateProviderDto): Observable<ProviderDto> {
    return this.providerConnector.update(id, input);
  }

  delete(id: string): Observable<string> {
    return this.providerConnector.delete(id);
  }
}
