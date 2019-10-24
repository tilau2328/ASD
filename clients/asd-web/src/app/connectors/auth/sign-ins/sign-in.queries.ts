import gql from "graphql-tag";
import {USER_ITEM_FRAGMENT} from "../users/user.queries";
import {TOKEN_DETAIL_FRAGMENT} from "../tokens/token.queries";

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
        connection {
            ...ConnectionItemFragment
        }
        token {
            ...TokenItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
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
