/** @jsx jsx */
import React, {createContext, useReducer} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {css, jsx} from '@emotion/core';
import SignIn from './components/SignIn';

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

const SignUp: React.FC = () => {
  return (
    <div className="container">
      <div className="notification">Sign Up</div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const style = {
    main: css`
      background-color: #115677;
      min-heigth: unset;
      min-height: 5rem;
    `,
    brand: css`
      color: #4dc5fd;
      font-size: 20px;
    `,
    button: css`
      background-color: #9adbf9;
      border-radius: 12px;
      color: #115677;
    `,
  };
  return (
    <nav className="navbar" css={style.main}>
      <div className="navbar-brand">
        <div css={style.brand} className="navbar-item">
          Bookmark app
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link css={style.button} className="button" to="/signin">
                Sign in
              </Link>
              <Link css={style.button} className="button" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home: React.FC = () => {
  const bgImg =
    'https://res.cloudinary.com/drtt3lmfe/image/upload/v1559231199/abstract-oil-painting-art-artistic-1546251_v8hnv5.jpg';

  const mainStyle = css`background-image: url("${bgImg}");`;

  return (
    <section css={mainStyle} className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container" />
      </div>
    </section>
  );
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
