import gql from "graphql-tag";
import {PROVIDER_CONNECTION_FRAGMENT} from "../providers/provider.queries";

export const CONNECTION_DETAIL_FRAGMENT = gql`
    fragment ConnectionDetailFragment on Connection {
        id
        token
        remoteId
        provider {
            ...ProviderConnectionFragment
        }
    }
  ${PROVIDER_CONNECTION_FRAGMENT}
`;

export const CONNECTIONS_QUERY = gql`
    query connections {
        connections {
            ...ConnectionDetailFragment
        }
    }
    ${CONNECTION_DETAIL_FRAGMENT}
`;

export const CONNECTION_QUERY = gql`
    query client($id: ID!) {
        client(id: $id) {
            ...ConnectionDetailFragment
        }
    }
    ${CONNECTION_DETAIL_FRAGMENT}
`;


export const CREATE_CONNECTION_MUTATION = gql`
    mutation createConnection($input: ConnectionInput!) {
        createConnection(input: $input) {
            ...ConnectionDetailFragment
        }
    }
    ${CONNECTION_DETAIL_FRAGMENT}
`;

export const DELETE_CONNECTION_MUTATION = gql`
    mutation deleteConnection($id: ID!) {
        deleteConnection(id: $id)
    }
`;
