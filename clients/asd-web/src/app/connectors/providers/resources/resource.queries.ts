import gql from "graphql-tag";

export const RESOURCE_ITEM_FRAGMENT = gql`
    fragment ResourceItemFragment on Resource {
        id
        name
        provider {
            id
            name
        }
    }
`;

export const RESOURCE_DETAIL_FRAGMENT = gql`
    fragment ResourceDetailFragment on Resource {
        id
        name
        method
        endpoint
        provider {
            id
            name
        }
        params
        headers
        queryParams
    }
`;

export const RESOURCES_QUERY = gql`
    query resources {
        resources {
            ...ResourceItemFragment
        }
    }
    ${RESOURCE_ITEM_FRAGMENT}
`;

export const RESOURCE_QUERY = gql`
    query resource($id: ID!) {
        resource(id: $id) {
            ...ResourceDetailFragment
        }
    }
    ${RESOURCE_DETAIL_FRAGMENT}
`;

export const CREATE_RESOURCE_MUTATION = gql`
    mutation createResource($input: CreateResourceInput!) {
        createResource(input: $input) {
            ...ResourceDetailFragment
        }
    }
    ${RESOURCE_DETAIL_FRAGMENT}
`;

export const UPDATE_RESOURCE_MUTATION = gql`
    mutation updateResource($id: ID!, $input: UpdateResourceInput!) {
        updateResource(id: $id, input: $input) {
            ...ResourceDetailFragment
        }
    }
    ${RESOURCE_DETAIL_FRAGMENT}
`;

export const DELETE_RESOURCE_MUTATION = gql`
    mutation deleteResource($id: ID!) {
        deleteResource(id: $id)
    }
`;

export const RESOURCE_SUBSCRIPTION = gql`
    subscription resourceEvent($id: ID) {
        resourceEvent(id: $id) {
            type
            payload {
                ...ResourceDetailFragment
            }
        }
    }
`;
