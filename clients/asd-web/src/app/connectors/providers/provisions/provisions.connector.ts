import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ProvisionDto, ProvisionEventDto, CreateProvisionDto, UpdateProvisionDto} from "./provision.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  PROVISION_QUERY,
  PROVISIONS_QUERY,
  PROVISION_SUBSCRIPTION,
  CREATE_PROVISION_MUTATION,
  DELETE_PROVISION_MUTATION,
  UPDATE_PROVISION_MUTATION
} from "./provision.queries";

@Injectable()
export class ProvisionsConnector {
  constructor(private readonly apollo: Apollo) {}

  listProvisions(): Observable<ProvisionDto[]> {
    const query = this.apollo.watchQuery<ProvisionDto[]>({
      query: PROVISIONS_QUERY,
    });

    query.subscribeToMore({
      document: PROVISION_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.provisionEvent) return prev;
        prev['provisions'] = ProvisionsConnector.updateList(prev['provisions'], data.provisionEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["provisions"]));
  }

  getProvision(id: string): Observable<ProvisionDto> {
    const query = this.apollo.watchQuery<ProvisionDto>({
      query: PROVISION_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: PROVISION_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.provisionEvent) return prev;
        prev['provision'] = ProvisionsConnector.updateItem(prev['provision'], data.provisionEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["provisions"]));
  }

  create(input: CreateProvisionDto): Observable<ProvisionDto> {
    return this.apollo.mutate<ProvisionDto>({
      mutation: CREATE_PROVISION_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createProvision']));
  }

  update(id: string, input: UpdateProvisionDto): Observable<ProvisionDto> {
    return this.apollo.mutate<ProvisionDto>({
      mutation: UPDATE_PROVISION_MUTATION,
      variables: { id, input }
    }).pipe(map(({ data }) => data['updateProvision']));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<ProvisionDto>({
      mutation: DELETE_PROVISION_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  private static updateItem(item: ProvisionDto, event: ProvisionEventDto): ProvisionDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: ProvisionDto[], event: ProvisionEventDto): ProvisionDto[] {
    const index: number = list.findIndex((item: ProvisionDto) => item.id === event.payload.id);
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
