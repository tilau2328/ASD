import gql from "graphql-tag";
import {PROVIDER_ITEM_FRAGMENT} from "../providers/provider.queries";
import {CLIENT_ITEM_FRAGMENT} from "../../auth/clients/client.queries";

export const PROVISION_ITEM_FRAGMENT = gql`
    fragment ProvisionItemFragment on Provision {
        id
        name
    }
`;

export const PROVISION_DETAIL_FRAGMENT = gql`
    fragment ProvisionDetailFragment on Provision {
        id
        name
        clientId
        clientSecret
        client {
            ...ClientItemFragment
        }
        provider {
            ...ProviderItemFragment
        }
    }
    ${PROVIDER_ITEM_FRAGMENT}
    ${CLIENT_ITEM_FRAGMENT}
`;

export const PROVISIONS_QUERY = gql`
    query provisions {
        provisions {
            ...ProvisionItemFragment
        }
    }
    ${PROVISION_ITEM_FRAGMENT}
`;

export const PROVISION_QUERY = gql`
    query provision($id: ID!) {
        provision(id: $id) {
            ...ProvisionDetailFragment
        }
    }
    ${PROVISION_DETAIL_FRAGMENT}
`;

export const UPDATE_PROVISION_MUTATION = gql`
    mutation updateProvision($id: ID!,$input: UpdateProvisionInput!) {
        updateProvision(id: $id, input: $input) {
            ...ProvisionDetailFragment
        }
    }

    ${PROVISION_DETAIL_FRAGMENT}
`;

export const DELETE_PROVISION_MUTATION = gql`
    mutation deleteProvision($id: ID!) {
        deleteProvision(id: $id)
    }
    ${PROVISION_DETAIL_FRAGMENT}
`;
