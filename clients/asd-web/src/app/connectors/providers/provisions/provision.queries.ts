import gql from "graphql-tag";
import {PROVISION_DETAIL_FRAGMENT, PROVISION_ITEM_FRAGMENT} from "./provision.fragments";

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

export const CREATE_PROVISION_MUTATION = gql`
    mutation createProvision($input: CreteProvisionInput!) {
        createProvision(input: $input) {
            ...ProvisionDetailFragment
        }
    }
    ${PROVISION_DETAIL_FRAGMENT}
`;

export const UPDATE_PROVISION_MUTATION = gql`
    mutation updateProvision($id: ID!, $input: UpdateProvisionInput!) {
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
`;

export const PROVISION_SUBSCRIPTION = gql`
    subscription provisionEvent($id: ID) {
        provisionEvent(id: $id) {
            type
            payload {
                ...ProvisionDetailFragment
            }
        }
    }
`;
