import gql from "graphql-tag";
import {RESOURCE_DETAIL_FRAGMENT} from "../resources/resource.queries";

export const PROVIDER_ITEM_FRAGMENT = gql`
    fragment ProviderItemFragment on Provider {
        id
        name
    }
`;

export const PROVIDER_CONNECTION_FRAGMENT = gql`
    fragment ProviderConnectionFragment on Provider {
        id
        name
        authUrl {
            ...ResourceDetailFragment
        }
    }
    ${RESOURCE_DETAIL_FRAGMENT}
`;

export const PROVIDER_DETAIL_FRAGMENT = gql`
    fragment ProviderDetailFragment on Provider {
        id
        name
        scope
        authUrl {
            ...ResourceDetailFragment
        }
        userUrl {
            ...ResourceDetailFragment
        }
        tokenUrl {
            ...ResourceDetailFragment
        }
    }
    ${RESOURCE_DETAIL_FRAGMENT}
`;

export const PROVIDERS_QUERY = gql`
    query providers {
        providers {
            ...ProviderItemFragment
        }
    }
    ${PROVIDER_ITEM_FRAGMENT}
`;

export const PROVIDER_QUERY = gql`
    query provider($id: ID!) {
        provider(id: $id) {
            ...ProviderDetailFragment
        }
    }
    ${PROVIDER_DETAIL_FRAGMENT}
`;

export const CREATE_PROVIDER_MUTATION = gql`
    mutation createProvider($input: CreateProviderInput!) {
        createProvider(input: $input) {
            ...ProviderDetailFragment
        }
    }
    ${PROVIDER_DETAIL_FRAGMENT}
`;

export const UPDATE_PROVIDER_MUTATION = gql`
    mutation updateProvider($id: ID!, $input: UpdateProviderInput!) {
        updateProvider(id: $id, input: $input) {
            ...ProviderDetailFragment
        }
    }
    ${PROVIDER_DETAIL_FRAGMENT}
`;

export const DELETE_PROVIDER_MUTATION = gql`
    mutation deleteProvider($id: ID!) {
        deleteProvider(id: $id)
    }
`;

export const PROVIDER_SUBSCRIPTION = gql`
    subscription providerEvent($id: ID) {
        providerEvent(id: $id) {
            type
            payload {
                ...ProviderDetailFragment
            }
        }
    }
    ${PROVIDER_DETAIL_FRAGMENT}
`;
