import React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from './AppQueries';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../theme';

const App = ({ data }: any) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={myTheme}>{JSON.stringify(data)}</ThemeProvider>
    </React.Fragment>
  );
};

export default graphql(IS_LOGGED_IN)(App);
