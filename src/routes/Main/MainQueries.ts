import { gql } from '@apollo/react-hooks';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    GetCurrentUser {
      ok
      error
      user {
        friendsList {
          id
          name
          email
        }
      }
    }
  }
`;

export const ADD_FRIENDS = gql`
  mutation {
    AddFriend(email: "bb@bb.com") {
      ok
      error
    }
  }
`;
