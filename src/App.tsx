/** @jsx jsx */
import React, {createContext, useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {jsx} from '@emotion/core';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';

const urls = [
  {
    id: 1,
    url: 'http://www.foobar.com',
    tags: ['foo', 'bar'],
  },
  {
    id: 2,
    url: 'http://www.trendingrepos.xyz',
    tags: ['uol', 'netflix'],
  },
  {
    id: 3,
    url: 'http://www.blablacar.com',
    tags: ['react', 'hooks'],
  },
];

interface Url {
  id: number;
  url: string;
  tags: string[];
}

interface AppState {
  urls: Url[];
  loggedIn: boolean;
}

const AppContext = createContext<AppState>({
  urls: [],
  loggedIn: false,
});

const signInReducer = (state: boolean, action: {type: string}) => {
  switch (action.type) {
    case 'SIGN_IN':
      console.log('signing in');
      return true;
    default:
      return state;
  }
};

const App: React.FC = () => {
  const initialState = {
    urls: urls,
    loggedIn: false,
  };

  const [user, dispatchSignIn] = useReducer(signInReducer, false);
  console.log(`USER LOGGED?: ${user}`);

  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route
            path="/signin"
            render={props => <SignIn {...props} onSignIn={dispatchSignIn} />}
          />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
