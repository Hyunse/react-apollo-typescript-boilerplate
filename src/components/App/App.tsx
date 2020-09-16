import React from 'react';
import { IS_LOGGED_IN } from './AppQueries';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../theme';
import { useQuery } from 'react-apollo-hooks'

const App = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <React.Fragment>
      <ThemeProvider theme={myTheme}>{JSON.stringify(data)}</ThemeProvider>
    </React.Fragment>
  );
};

export default App;
