import { gql } from '@apollo/react-hooks';

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    SignIn(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;
