/** @jsx jsx */
import React, {createContext, useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {jsx} from '@emotion/core';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import urls from './urls';
import {SIGN_IN, LOADING} from './types';

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
  fetchUrl: any;
}

type Payload = {};

interface Action {
  type: string;
  payload?: Payload;
}

const initialState = {
  urls: urls,
  loggedIn: false,
  loading: false,
  token: '',
  user: {},
  fetchUrl: () => {
    console.log('bla');
  },
};

const AppContext = createContext<AppState>(initialState);

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, loggedIn: true};
    case LOADING:
      return {...state, loading: true};
    default:
      return state;
  }
};

const Dashboard: React.FC = () => {
  const {fetchUrl} = React.useContext(AppContext);

  useEffect(() => {
    console.log('call api and get user urls');
    fetchUrl();
  }, []);

  return <React.Fragment>Dashboard</React.Fragment>;
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
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
