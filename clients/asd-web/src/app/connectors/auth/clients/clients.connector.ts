import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ClientDto} from "./client.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {CLIENTS_QUERY} from "./client.queries";

@Injectable()
export class ClientsConnector {
  constructor(private readonly apollo: Apollo) {}

  listClients(): Observable<ClientDto> {
    const query = this.apollo.watchQuery<ClientDto[]>({
      query: CLIENTS_QUERY,
    });

    query.subscribeToMore({
      document: CLIENT_CREATED_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        const clients: ClientDto[] = prev['clients'];
        if (!subscriptionData.data) return prev;
        const { id } = subscriptionData.data.clientCreated;
        if(clients.findIndex((client: ClientDto) => client.id === id) === -1)
          prev['clients'] = [...clients, subscriptionData.data.clientCreated];
        return prev;
      }
    });

    query.subscribeToMore({
      document: CLIENT_UPDATED_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        const clients: ClientDto[] = prev['clients'];
        if (!subscriptionData.data) return prev;
        const newClient: ClientDto = subscriptionData.data.clientUpdated;
        const index: number = clients.findIndex((client: ClientDto) => client.id === newClient.id);
        if (index > -1) clients.splice(index, 1, newClient);
        else prev['clients'] = [...clients, newClient];
        return prev;
      }
    });

    query.subscribeToMore({
      document: CLIENT_DELETED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        const clients: ClientDto[] = prev['clients'];
        if (!subscriptionData.data) return prev;
        const id = subscriptionData.data.clientDeleted;
        const index: number = clients.findIndex((client: ClientDto) => client.id === id);
        if (index > -1) clients.splice(index, 1);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(result => result.data["clients"]));
  }
}
