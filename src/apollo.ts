import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({
  // States
  clientState: {
    // S - Default States
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt')),
      },
    },
    // E - Default States
    // S - Resolvers
    resolvers: {
      Mutation: {
        SignIn: (_, { token }, { cache }) => {
          localStorage.setItem('jwt', token);
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });
          return null;
        },
        SignOut: (_, __, { cache }) => {
          localStorage.removeItem('jwt');
          cache.writeData({
            data: {
              __typename: 'Auth',
              isLoggedIn: false,
            },
          });

          return null;
        },
      },
    },
    // E - Resolvers
  },
  request: async (operation: Operation) => {
    operation.setContext({
      // Set JWT in Headers
      headers: {
        'X-JWT': localStorage.getItem('jwt') || '',
      },
    });
  },
  uri: 'http://localhost:4000/graphql',
});

export default client;
