/** @jsx jsx */
import React, {createContext, useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {jsx} from '@emotion/core';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import urls from './urls';

const SIGN_IN = 'SIGN_IN';

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

const appReducer = (state: AppState, action: {type: string}) => {
  switch (action.type) {
    case SIGN_IN:
      console.log('signing in teste');
      return {...state, loggedIn: true};
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route
            path="/signin"
            render={props => <SignIn {...props} onSignIn={dispatch} />}
          />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
