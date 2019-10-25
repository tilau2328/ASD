import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ConnectionDto, ConnectionEventDto, CreateConnectionDto} from "./connection.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  CONNECTION_QUERY,
  CONNECTIONS_QUERY,
  CONNECTION_SUBSCRIPTION,
  CREATE_CONNECTION_MUTATION,
  DELETE_CONNECTION_MUTATION,
} from "./connection.queries";

@Injectable()
export class ConnectionsConnector {
  constructor(private readonly apollo: Apollo) {}

  listConnections(): Observable<ConnectionDto[]> {
    const query = this.apollo.watchQuery<ConnectionDto[]>({
      query: CONNECTIONS_QUERY,
    });

    query.subscribeToMore({
      document: CONNECTION_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.connectionEvent) return prev;
        prev['connections'] = ConnectionsConnector.updateList(prev['connections'], data.connectionEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["connections"]));
  }

  getConnection(id: string): Observable<ConnectionDto> {
    const query = this.apollo.watchQuery<ConnectionDto>({
      query: CONNECTION_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: CONNECTION_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.connectionEvent) return prev;
        prev['connection'] = ConnectionsConnector.updateItem(prev['connection'], data.connectionEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["connections"]));
  }

  create(input: CreateConnectionDto): Observable<ConnectionDto> {
    return this.apollo.mutate<ConnectionDto>({
      mutation: CREATE_CONNECTION_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createConnection']));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<ConnectionDto>({
      mutation: DELETE_CONNECTION_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  private static updateItem(item: ConnectionDto, event: ConnectionEventDto): ConnectionDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: ConnectionDto[], event: ConnectionEventDto): ConnectionDto[] {
    const index: number = list.findIndex((item: ConnectionDto) => item.id === event.payload.id);
    switch (event.type) {
      case 'create':
      case 'update':
        if(index > -1)
          list.splice(index, 1);
        return [...list, event.payload];
      case 'delete':
        if(index > -1)
          list.splice(index, 1);
        return list;
      default:
        return list;
    }
  }
}
