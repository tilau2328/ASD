import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ProviderDto, ProviderEventDto, CreateProviderDto, UpdateProviderDto} from "./provider.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  PROVIDER_QUERY,
  PROVIDERS_QUERY,
  PROVIDER_SUBSCRIPTION,
  CREATE_PROVIDER_MUTATION,
  DELETE_PROVIDER_MUTATION,
  UPDATE_PROVIDER_MUTATION
} from "./provider.queries";

@Injectable()
export class ProvidersConnector {
  constructor(private readonly apollo: Apollo) {}

  listProviders(): Observable<ProviderDto[]> {
    const query = this.apollo.watchQuery<ProviderDto[]>({
      query: PROVIDERS_QUERY,
    });

    query.subscribeToMore({
      document: PROVIDER_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.providerEvent) return prev;
        prev['providers'] = ProvidersConnector.updateList(prev['providers'], data.providerEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["providers"]));
  }

  getProvider(id: string): Observable<ProviderDto> {
    const query = this.apollo.watchQuery<ProviderDto>({
      query: PROVIDER_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: PROVIDER_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.providerEvent) return prev;
        prev['provider'] = ProvidersConnector.updateItem(prev['provider'], data.providerEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["providers"]));
  }

  create(input: CreateProviderDto): Observable<ProviderDto> {
    return this.apollo.mutate<ProviderDto>({
      mutation: CREATE_PROVIDER_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createProvider']));
  }

  update(id: string, input: UpdateProviderDto): Observable<ProviderDto> {
    return this.apollo.mutate<ProviderDto>({
      mutation: UPDATE_PROVIDER_MUTATION,
      variables: { id, input }
    }).pipe(map(({ data }) => data['updateProvider']));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<ProviderDto>({
      mutation: DELETE_PROVIDER_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  private static updateItem(item: ProviderDto, event: ProviderEventDto): ProviderDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: ProviderDto[], event: ProviderEventDto): ProviderDto[] {
    const index: number = list.findIndex((item: ProviderDto) => item.id === event.payload.id);
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
