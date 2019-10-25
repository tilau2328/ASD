import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ClientDto, ClientEventDto, CreateClientDto, UpdateClientDto} from "./client.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  CLIENT_QUERY,
  CLIENTS_QUERY,
  CLIENT_SUBSCRIPTION,
  CREATE_CLIENT_MUTATION,
  DELETE_CLIENT_MUTATION,
  UPDATE_CLIENT_MUTATION
} from "./client.queries";

@Injectable()
export class ClientsConnector {
  constructor(private readonly apollo: Apollo) {}

  listClients(): Observable<ClientDto[]> {
    const query = this.apollo.watchQuery<ClientDto[]>({
      query: CLIENTS_QUERY,
    });

    query.subscribeToMore({
      document: CLIENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.clientEvent) return prev;
        prev['clients'] = ClientsConnector.updateList(prev['clients'], data.clientEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["clients"]));
  }

  getClient(id: string): Observable<ClientDto> {
    const query = this.apollo.watchQuery<ClientDto>({
      query: CLIENT_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: CLIENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.clientEvent) return prev;
        prev['client'] = ClientsConnector.updateItem(prev['client'], data.clientEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["clients"]));
  }

  create(input: CreateClientDto): Observable<ClientDto> {
    return this.apollo.mutate<ClientDto>({
      mutation: CREATE_CLIENT_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createClient']));
  }

  update(id: string, input: UpdateClientDto): Observable<ClientDto> {
    return this.apollo.mutate<ClientDto>({
      mutation: UPDATE_CLIENT_MUTATION,
      variables: { id, input }
    }).pipe(map(({ data }) => data['updateClient']));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<ClientDto>({
      mutation: DELETE_CLIENT_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  private static updateItem(item: ClientDto, event: ClientEventDto): ClientDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: ClientDto[], event: ClientEventDto): ClientDto[] {
    const index: number = list.findIndex((item: ClientDto) => item.id === event.payload.id);
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
