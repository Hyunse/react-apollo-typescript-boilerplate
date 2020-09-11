import { gql } from 'apollo-boost';

export const IS_LOGGED_IN = gql`
  {
    GetAllUser {
      users {
        id
        name
      }
    }
    # auth {
    #   isLoggedIn @client
    # }
  }
`;
