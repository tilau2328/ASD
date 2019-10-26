import {Cookie} from "ng2-cookies";
import {NgModule} from '@angular/core';
import {WebSocketLink} from "apollo-link-ws";
import {ApolloLink, split} from "apollo-link";
import {OperationDefinitionNode} from "graphql";
import {HttpLink} from "apollo-angular-link-http";
import {getMainDefinition} from "apollo-utilities";
import {Apollo, ApolloModule} from "apollo-angular";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpClient, HttpClientModule} from "@angular/common/http";

export const cache: InMemoryCache = new InMemoryCache();

@NgModule({
  imports: [
    ApolloModule,
    HttpClientModule,
  ],
})
export class ConnectorsModule {
  private readonly url = 'localhost:8000/graphql';

  constructor(
    private readonly apollo: Apollo,
    private readonly httpClient: HttpClient,
  ) {
    const httpLink = new HttpLink(httpClient).create({ uri: `http://${this.url}` });

    const wsLink = new WebSocketLink({
      uri:`ws://${this.url}`,
      options: {
        reconnect: true,
        connectionParams: {
          authToken: Cookie.get('access_token') || null
        }
      }
    });

    const authLink = new ApolloLink((operation, forward) => {
      const token = Cookie.get('access_token');
      operation.setContext({
        headers: { 'Authorization': token ? `Bearer ${token}` : '' }
      });
      return forward(operation);
    });

    const link = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        const { operation } = <OperationDefinitionNode> definition;
        return definition.kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      authLink.concat(httpLink)
    );

    apollo.create({ link, cache });
  }
}

