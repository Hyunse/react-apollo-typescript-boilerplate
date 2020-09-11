import React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from './AppQueries';

const App = ({ data }: any) => {
  return <div className="App">{JSON.stringify(data)}</div>;
};

export default graphql(IS_LOGGED_IN)(App);
