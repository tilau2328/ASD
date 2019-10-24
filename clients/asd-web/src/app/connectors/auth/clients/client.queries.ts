import gql from "graphql-tag";
import {TOKEN_DETAIL_FRAGMENT} from "../tokens/token.queries";

export const CLIENT_ITEM_FRAGMENT = gql`
    fragment ClientItemFragment on Client {
        id
        name
    }
`;

export const CLIENT_DETAIL_FRAGMENT = gql`
    fragment ClientDetailFragment on Client {
        id
        name
        scope
        clientId
        clientSecret
    }
`;

export const CLIENTS_QUERY = gql`
    query clients {
        clients {
            ...ClientItemFragment
        }
    }
    ${CLIENT_ITEM_FRAGMENT}
`;

export const CLIENT_QUERY = gql`
    query client($id: ID!) {
        client(id: $id) {
            ...ClientDetailFragment
        }
    }
    ${CLIENT_DETAIL_FRAGMENT}
`;

export const CREATE_CLIENT_MUTATION = gql`
    mutation createClient($input: CreateClientInput!) {
        createClient(input: $input) {
            ...ClientDetailFragment
        }
    }
    ${CLIENT_DETAIL_FRAGMENT}
`;

export const UPDATE_CLIENT_MUTATION = gql`
    mutation updateClient($id: ID!,$input: UpdateClientInput!) {
        updateClient(id: $id, input: $input) {
            ...ClientDetailFragment
        }
    }

    ${CLIENT_DETAIL_FRAGMENT}
`;

export const DELETE_CLIENT_MUTATION = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id: $id)
    }
    ${CLIENT_DETAIL_FRAGMENT}
`;

export const CLIENT_SUBSCRIPTION = gql`
    subscription clientEvent($id: ID) {
        type
        client {
            ...ClientDetailFragment
        }
    }
`;
