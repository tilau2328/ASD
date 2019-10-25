import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserDto, UserEventDto, UpdateUserDto} from "./user.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  USER_QUERY,
  USERS_QUERY,
  USER_SUBSCRIPTION,
  DELETE_USER_MUTATION,
  UPDATE_USER_MUTATION, ME_QUERY
} from "./user.queries";

@Injectable()
export class UsersConnector {
  constructor(private readonly apollo: Apollo) {}

  listUsers(): Observable<UserDto[]> {
    const query = this.apollo.watchQuery<UserDto[]>({
      query: USERS_QUERY,
    });

    query.subscribeToMore({
      document: USER_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.userEvent) return prev;
        prev['users'] = UsersConnector.updateList(prev['users'], data.userEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["users"]));
  }

  getUser(id: string): Observable<UserDto> {
    const query = this.apollo.watchQuery<UserDto>({
      query: USER_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: USER_SUBSCRIPTION,
      variables: { id },
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.userEvent) return prev;
        prev['user'] = UsersConnector.updateItem(prev['user'], data.userEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["users"]));
  }

  update(id: string, input: UpdateUserDto): Observable<UserDto> {
    return this.apollo.mutate<UserDto>({
      mutation: UPDATE_USER_MUTATION,
      variables: { id, input }
    }).pipe(map(({ data }) => data['updateUser']));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<UserDto>({
      mutation: DELETE_USER_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  getMe(): Observable<UserDto> {
    const query = this.apollo.query<UserDto>({
      query: ME_QUERY,
    });
    return query.pipe(map(({ data }) => data["me"]));
  }

  subscribe(id: string): Observable<UserEventDto> {
    return this.apollo.subscribe({
      query: USER_SUBSCRIPTION,
      variables: { id },
    }).pipe(map(({ data }) => data['userEvent']));
  }

  private static updateItem(item: UserDto, event: UserEventDto): UserDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: UserDto[], event: UserEventDto): UserDto[] {
    const index: number = list.findIndex((item: UserDto) => item.id === event.payload.id);
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
