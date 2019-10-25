import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ClientsConnector} from "../../../connectors/auth/clients/clients.connector";
import {UpdateClientDto, ClientDto, CreateClientDto} from "../../../connectors/auth/clients/client.dto";

@Injectable()
export class ClientService {
  clients$: Observable<ClientDto[]>;
  currentClient$: Observable<ClientDto>;

  constructor(private readonly clientConnector: ClientsConnector) {}

  listClients(): Observable<ClientDto[]> {
    if (!this.clients$) {
      this.clients$ = this.clientConnector.listClients();
    }
    return this.clients$;
  }

  getClient(id: string): Observable<ClientDto> {
    if (!this.clients$) {
      this.currentClient$ = this.clientConnector.getClient(id);
    }
    return this.currentClient$;
  }

  createClient(input: CreateClientDto): Observable<ClientDto> {
    return this.clientConnector.create(input);
  }

  updateClient(id: string, input: UpdateClientDto): Observable<ClientDto> {
    return this.clientConnector.update(id, input);
  }

  deleteClient(id: string): Observable<string> {
    return this.clientConnector.delete(id);
  }
}
