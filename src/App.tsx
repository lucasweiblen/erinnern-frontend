/** @jsx jsx */
import React, {createContext, useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {jsx} from '@emotion/core';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import urls from './urls';

interface Url {
  id: number;
  url: string;
  tags: string[];
}

type Token = string;

type User = {username?: string};

interface AppState {
  urls: Url[];
  loggedIn: boolean;
  loading: boolean;
  token: Token;
  user: User;
}

const initialState = {
  urls: urls,
  loggedIn: false,
  loading: false,
  token: '',
  user: {},
};

const AppContext = createContext<AppState>(initialState);

const signInReducer = (state: boolean, action: {type: string}) => {
  switch (action.type) {
    case 'SIGN_IN':
      console.log('signing in teste');
      return true;
    default:
      return state;
  }
};

const App: React.FC = () => {
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
