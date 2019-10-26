import gql from "graphql-tag";
import {USER_ITEM_FRAGMENT} from "../users/user.queries";
import {TOKEN_DETAIL_FRAGMENT, TOKEN_ITEM_FRAGMENT} from "../tokens/token.queries";
import {CONNECTION_ITEM_FRAGMENT} from "../../providers/connections/connection.queries";

export const SIGN_UP_ITEM_FRAGMENT = gql`
    fragment SignUpItemFragment on SignUp {
        id
        user {
            ...UserItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
`;

export const SIGN_UP_DETAIL_FRAGMENT = gql`
    fragment SignUpDetailFragment on SignUp {
        id
        user {
            ...UserItemFragment
        }
        email
        username
        token {
            ...TokenItemFragment
        }
        connections {
            ...ConnectionItemFragment
        }
    }
    ${USER_ITEM_FRAGMENT}
    ${TOKEN_ITEM_FRAGMENT}
    ${CONNECTION_ITEM_FRAGMENT}
`;

export const SIGN_UPS_QUERY = gql`
    query signUps {
        signUps {
            ...SignUpItemFragment
        }
    }
    ${SIGN_UP_ITEM_FRAGMENT}
`;

export const SIGN_UP_QUERY = gql`
    query signUp($id: ID!) {
        signUp(id: $id) {
            ...SignUpDetailFragment
        }
    }
    ${SIGN_UP_DETAIL_FRAGMENT}
`;

export const CREATE_SIGN_UP_MUTATION = gql`
    mutation createSignUp($input: SignUpInput!) {
        createSignUp(input: $input) {
            ...TokenDetailFragment
        }
    }
    ${TOKEN_DETAIL_FRAGMENT}
`;

export const SIGN_UP_SUBSCRIPTION = gql`
    subscription signUpEvent($id: ID) {
        signUpEvent(id: $id) {
            type
            payload {
                ...SignUpDetailFragment
            }
        }
    }
    ${SIGN_UP_DETAIL_FRAGMENT}
`;
