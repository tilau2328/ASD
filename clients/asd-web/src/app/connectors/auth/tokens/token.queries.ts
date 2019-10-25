import gql from "graphql-tag";

export const TOKEN_ITEM_FRAGMENT = gql`
    fragment TokenItemFragment on Token {
        id
    }
`;

export const TOKEN_DETAIL_FRAGMENT = gql`
    fragment TokenDetailFragment on Token {
        refreshValidity
        tokenValidity
        refreshToken
        accessToken
        id
    }
`;

export const TOKENS_QUERY = gql`
    query tokens {
        tokens {
            ...TokenItemFragment
        }
    }
    ${TOKEN_ITEM_FRAGMENT}
`;

export const TOKEN_QUERY = gql`
    query token($id: ID!) {
        token(id: $id) {
            ...TokenDetailFragment
        }
    }
    ${TOKEN_DETAIL_FRAGMENT}
`;

export const DELETE_TOKEN_MUTATION = gql`
    mutation deleteToken($id: ID!) {
        deleteToken(id: $id)
    }
`;

export const TOKEN_SUBSCRIPTION = gql`
    subscription tokenEvent($id: ID) {
        tokenEvent(id: $id) {
            type
            payload {
                ...TokenDetailFragment
            }
        }
    }
`;
