import gql from "graphql-tag";

export const USER_ITEM_FRAGMENT = gql`
    fragment UserItemFragment on User {
        id
        username
        avatarUrl
    }
`;

export const USER_DETAIL_FRAGMENT = gql`
    fragment UserDetailFragment on User {
        id
        email
        username
        avatarUrl
        connections {
            ...ConnectionDetailFragment
        }
    }
`;

export const USERS_QUERY = gql`
    query clients {
        clients {
            ...UserItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
`;

export const USER_QUERY = gql`
    query client($id: ID!) {
        client(id: $id) {
            ...UserDetailFragment
        }
    }
    ${USER_DETAIL_FRAGMENT}
`;

export const UPDATE_USER_MUTATION = gql`
    mutation updateUser($id: ID!,$input: UpdateUserInput!) {
        updateUser(id: $id, input: $input) {
            ...UserDetailFragment
        }
    }

    ${USER_DETAIL_FRAGMENT}
`;

export const DELETE_USER_MUTATION = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id)
    }
`;
