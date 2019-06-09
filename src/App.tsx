/** @jsx jsx */
import React, {createContext, useReducer, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {css, jsx} from '@emotion/core';

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

interface SignInProps {
  onSignIn: any;
}

const SignIn: React.FC<SignInProps> = props => {
  //const context = useContext(AppContext); // getting value passed to context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //console.log(context);

  const style = {
    button: css`
      background-color: #9adbf9;
      color: #195e7f;
      width: 365px;
      border: 1px solid #9adbf9;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 15px;
    `,
    input: css`
      border: 0;
      border-bottom: 5px solid #9adbf9;
      margin-bottom: 20px;
      background-color: #2999cd;
    `,
    box: css`
      background-color: #2999cd;
      width: 434px;
      height: 200px;
      margin: 50px auto;
      border-radius: 10px;
      & input::placeholder {
        color: #9adbf9;
        text-transform: uppercase;
      }
    `,
  };

  type Email = {email: string};

  const isValid = ({email}: Email) => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid({email: email})) {
      console.log('valid email');
      props.onSignIn({type: 'SIGN_IN'});
    } else {
      console.log('email not valid');
    }
  };

  return (
    <div className="container">
      <div css={style.box} className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                css={style.input}
                className="input"
                type="text"
                placeholder="e-mail"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="control">
              <input
                css={style.input}
                className="input"
                type="password"
                placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="control">
              <button css={style.button} className="button">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
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
