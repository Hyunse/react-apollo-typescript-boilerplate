import React from 'react';
// import { GET_ALL_USER } from './AppQueries';
// import { useQuery } from '@apollo/react-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '@routes/Main'
import SignIn from '@routes/SignIn'

const App = () => {
  // const { data } = useQuery(GET_ALL_USER);

  return (
    <div className="w-screen h-screen bg-primary text-primary">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/signIn" component={SignIn} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
