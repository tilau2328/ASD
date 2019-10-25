import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {
  CreateConnectionDto,
  ConnectionDto
} from "../../../connectors/providers/connections/connection.dto";
import {ConnectionsConnector} from "../../../connectors/providers/connections/connections.connector";

@Injectable()
export class ConnectionService {
  connections$: Observable<ConnectionDto[]>;
  currentConnection$: Observable<ConnectionDto>;

  constructor(private readonly connectionConnector: ConnectionsConnector) {}

  listConnections(): Observable<ConnectionDto[]> {
    if (!this.connections$) {
      this.connections$ = this.connectionConnector.listConnections();
    }
    return this.connections$;
  }

  getConnection(id: string): Observable<ConnectionDto> {
    if (!this.connections$) {
      this.currentConnection$ = this.connectionConnector.getConnection(id);
    }
    return this.currentConnection$;
  }

  createConnection(input: CreateConnectionDto): Observable<ConnectionDto> {
    return this.connectionConnector.create(input);
  }

  deleteConnection(id: string): Observable<string> {
    return this.connectionConnector.delete(id);
  }
}
