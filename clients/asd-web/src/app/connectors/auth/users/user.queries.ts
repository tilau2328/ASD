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

export const ME_QUERY = gql`
    query me {
        me {
            ...UserDetailFragment
        }
    }
    ${USER_DETAIL_FRAGMENT}
`;

export const USERS_QUERY = gql`
    query users {
        users {
            ...UserItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
`;

export const USER_QUERY = gql`
    query user($id: ID!) {
        user(id: $id) {
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

export const USER_SUBSCRIPTION = gql`
    subscription userEvent($id: ID) {
        userEvent(id: $id) {
            type
            payload {
                ...UserDetailFragment
            }
        }
    }
`;
