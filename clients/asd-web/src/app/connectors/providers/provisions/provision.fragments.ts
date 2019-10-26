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
