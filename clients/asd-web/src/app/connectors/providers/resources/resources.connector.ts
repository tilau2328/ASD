import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ResourceDto, ResourceEventDto, CreateResourceDto, UpdateResourceDto} from "./resource.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  RESOURCE_QUERY,
  RESOURCES_QUERY,
  RESOURCE_SUBSCRIPTION,
  CREATE_RESOURCE_MUTATION,
  DELETE_RESOURCE_MUTATION,
  UPDATE_RESOURCE_MUTATION
} from "./resource.queries";

@Injectable()
export class ResourcesConnector {
  constructor(private readonly apollo: Apollo) {}

  listResources(): Observable<ResourceDto[]> {
    const query = this.apollo.watchQuery<ResourceDto[]>({
      query: RESOURCES_QUERY,
    });

    query.subscribeToMore({
      document: RESOURCE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.resourceEvent) return prev;
        prev['resources'] = ResourcesConnector.updateList(prev['resources'], data.resourceEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["resources"]));
  }

  getResource(id: string): Observable<ResourceDto> {
    const query = this.apollo.watchQuery<ResourceDto>({
      query: RESOURCE_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: RESOURCE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.resourceEvent) return prev;
        prev['resource'] = ResourcesConnector.updateItem(prev['resource'], data.resourceEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["resources"]));
  }

  create(input: CreateResourceDto): Observable<ResourceDto> {
    return this.apollo.mutate<ResourceDto>({
      mutation: CREATE_RESOURCE_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createResource']));
  }

  update(id: string, input: UpdateResourceDto): Observable<ResourceDto> {
    return this.apollo.mutate<ResourceDto>({
      mutation: UPDATE_RESOURCE_MUTATION,
      variables: { id, input }
    }).pipe(map(({ data }) => data['updateResource']));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<ResourceDto>({
      mutation: DELETE_RESOURCE_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  private static updateItem(item: ResourceDto, event: ResourceEventDto): ResourceDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: ResourceDto[], event: ResourceEventDto): ResourceDto[] {
    const index: number = list.findIndex((item: ResourceDto) => item.id === event.payload.id);
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
