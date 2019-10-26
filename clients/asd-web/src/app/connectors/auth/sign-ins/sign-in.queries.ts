import gql from "graphql-tag";
import {TOKEN_DETAIL_FRAGMENT, TOKEN_ITEM_FRAGMENT} from "../tokens/token.queries";
import {CONNECTION_ITEM_FRAGMENT} from "../../providers/connections/connection.queries";
import {USER_ITEM_FRAGMENT} from "../users/user.queries";

export const SIGN_IN_ITEM_FRAGMENT = gql`
    fragment SignInItemFragment on SignIn {
        id
        user {
            ...UserItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
`;

export const SIGN_IN_DETAIL_FRAGMENT = gql`
    fragment SignInDetailFragment on SignIn {
        id
        user {
            ...UserItemFragment
        }
        username
        token {
            ...TokenItemFragment
        }
        connection {
            ...ConnectionItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
    ${TOKEN_ITEM_FRAGMENT}
    ${CONNECTION_ITEM_FRAGMENT}
`;

export const SIGN_INS_QUERY = gql`
    query signIns {
        signIns {
            ...SignInItemFragment
        }
    }
    ${SIGN_IN_ITEM_FRAGMENT}
`;

export const SIGN_IN_QUERY = gql`
    query signIn($id: ID!) {
        signIn(id: $id) {
            ...SignInDetailFragment
        }
    }
    ${SIGN_IN_DETAIL_FRAGMENT}
`;

export const CREATE_SIGN_IN_MUTATION = gql`
    mutation createSignIn($input: SignInInput!) {
        createSignIn(input: $input) {
            ...TokenDetailFragment
        }
    }
    ${TOKEN_DETAIL_FRAGMENT}
`;

export const SIGN_IN_SUBSCRIPTION = gql`
    subscription signInEvent($id: ID) {
        signInEvent(id: $id) {
            type
            payload {
                ...SignInDetailFragment
            }
        }
    }
    ${SIGN_IN_DETAIL_FRAGMENT}
`;
