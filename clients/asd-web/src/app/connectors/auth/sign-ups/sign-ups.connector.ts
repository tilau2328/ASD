import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CreateSignUpDto, SignUpDto, SignUpEventDto} from "./sign-up.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  SIGN_UP_QUERY,
  SIGN_UP_SUBSCRIPTION,
  SIGN_UPS_QUERY,
  CREATE_SIGN_UP_MUTATION,
} from "./sign-up.queries";
import {TokenDto} from "../tokens/token.dto";

@Injectable()
export class SignUpsConnector {
  constructor(private readonly apollo: Apollo) {}

  listSignUps(): Observable<SignUpDto[]> {
    const query = this.apollo.watchQuery<SignUpDto[]>({
      query: SIGN_UPS_QUERY,
    });

    query.subscribeToMore({
      document: SIGN_UP_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.signUpEvent) return prev;
        prev['signUps'] = SignUpsConnector.updateList(prev['signUps'], data.signUpEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["signUps"]));
  }

  getSignUp(id: string): Observable<SignUpDto> {
    const query = this.apollo.watchQuery<SignUpDto>({
      query: SIGN_UP_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: SIGN_UP_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.signUpEvent) return prev;
        prev['signUp'] = SignUpsConnector.updateItem(prev['signUp'], data.signUpEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["signUps"]));
  }

  create(input: CreateSignUpDto): Observable<TokenDto> {
    return this.apollo.mutate<SignUpDto>({
      mutation: CREATE_SIGN_UP_MUTATION,
      variables: { input }
    }).pipe(map(({ data }) => data['createSignUp']));
  }

  private static updateItem(item: SignUpDto, event: SignUpEventDto): SignUpDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: SignUpDto[], event: SignUpEventDto): SignUpDto[] {
    const index: number = list.findIndex((item: SignUpDto) => item.id === event.payload.id);
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
