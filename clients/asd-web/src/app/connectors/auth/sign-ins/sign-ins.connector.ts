import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CreateSignInDto, SignInDto, SignInEventDto} from "./sign-in.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  SIGN_IN_QUERY,
  SIGN_INS_QUERY,
  SIGN_IN_SUBSCRIPTION,
  CREATE_SIGN_IN_MUTATION,
} from "./sign-in.queries";
import {TokenDto} from "../tokens/token.dto";

@Injectable()
export class SignInsConnector {
  constructor(private readonly apollo: Apollo) {}

  listSignIns(): Observable<SignInDto[]> {
    const query = this.apollo.watchQuery<SignInDto[]>({
      query: SIGN_INS_QUERY,
    });

    query.subscribeToMore({
      document: SIGN_IN_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.signInEvent) return prev;
        prev['signIns'] = SignInsConnector.updateList(prev['signIns'], data.signInEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["signIns"]));
  }

  getSignIn(id: string): Observable<SignInDto> {
    const query = this.apollo.watchQuery<SignInDto>({
      query: SIGN_IN_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: SIGN_IN_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.signInEvent) return prev;
        prev['signIn'] = SignInsConnector.updateItem(prev['signIn'], data.signInEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["signIns"]));
  }

  create(input: CreateSignInDto): Observable<TokenDto> {
    return this.apollo.mutate<SignInDto>({
      mutation: CREATE_SIGN_IN_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createSignIn']));
  }

  private static updateItem(item: SignInDto, event: SignInEventDto): SignInDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: SignInDto[], event: SignInEventDto): SignInDto[] {
    const index: number = list.findIndex((item: SignInDto) => item.id === event.payload.id);
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
