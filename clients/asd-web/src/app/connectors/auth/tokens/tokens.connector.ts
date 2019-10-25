import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TokenDto, TokenEventDto} from "./token.dto";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {
  TOKEN_QUERY,
  TOKENS_QUERY,
  TOKEN_SUBSCRIPTION,
  DELETE_TOKEN_MUTATION,
} from "./token.queries";

@Injectable()
export class TokensConnector {
  constructor(private readonly apollo: Apollo) {}

  listTokens(): Observable<TokenDto[]> {
    const query = this.apollo.watchQuery<TokenDto[]>({
      query: TOKENS_QUERY,
    });

    query.subscribeToMore({
      document: TOKEN_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.tokenEvent) return prev;
        prev['tokens'] = TokensConnector.updateList(prev['tokens'], data.tokenEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["tokens"]));
  }

  getToken(id: string): Observable<TokenDto> {
    const query = this.apollo.watchQuery<TokenDto>({
      query: TOKEN_QUERY,
      variables: { id }
    });

    query.subscribeToMore({
      document: TOKEN_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        if (!data || !data.tokenEvent) return prev;
        prev['token'] = TokensConnector.updateItem(prev['token'], data.tokenEvent);
        return prev;
      }
    });

    return query.valueChanges.pipe(map(({ data }) => data["tokens"]));
  }

  delete(id: string): Observable<string> {
    return this.apollo.mutate<TokenDto>({
      mutation: DELETE_TOKEN_MUTATION,
      variables: { id }
    }).pipe(map(_ => id));
  }

  private static updateItem(item: TokenDto, event: TokenEventDto): TokenDto {
    switch (event.type) {
      case 'update':
        return { ...item, ...event.payload };
      case 'delete':
        return null;
      default:
        return item;
    }
  }

  private static updateList(list: TokenDto[], event: TokenEventDto): TokenDto[] {
    const index: number = list.findIndex((item: TokenDto) => item.id === event.payload.id);
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
