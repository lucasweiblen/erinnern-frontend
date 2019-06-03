/** @jsx jsx */
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {css, jsx} from '@emotion/core';

const bgColorNavbar = '#115677';
const bgColorBtn = '#9ADBF9';
const btnStyle = css`
  background-color: ${bgColorBtn};
  border-radius: 12px;
  color: #115677;
`;

const SignIn: React.FC = () => {
  const btnStyle = css`
    background-color: #9adbf9;
    color: #195e7f;
    width: 365px;
    border: 1px solid #9adbf9;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 15px;
  `;

  const inputStyle = css`
    border: 0;
    border-bottom: 5px solid #9adbf9;
    margin-bottom: 20px;
    background-color: #2999cd;
  `;

  return (
    <div className="container">
      <div
        css={css`
          background-color: #2999cd;
          width: 434px;
          height: 200px;
          margin: 50px auto;
          border-radius: 10px;
          & input::placeholder {
            color: #9adbf9;
            text-transform: uppercase;
          }
        `}
        className="box">
        <div className="field">
          <div className="control">
            <input
              css={inputStyle}
              className="input"
              type="text"
              placeholder="e-mail"
            />
          </div>
          <div className="control">
            <input
              css={inputStyle}
              className="input"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="control">
            <button css={btnStyle} className="button">
              Sign in
            </button>
          </div>
        </div>
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
  return (
    <nav
      className="navbar"
      css={css`
        background-color: ${bgColorNavbar};
        min-heigth: unset;
        min-height: 5rem;
      `}>
      <div className="navbar-brand">
        <div
          css={css`
            color: #4dc5fd;
            font-size: 20px;
          `}
          className="navbar-item">
          Bookmark app
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link css={btnStyle} className="button" to="/signin">
                Sign in
              </Link>
              <Link css={btnStyle} className="button" to="/signup">
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

  const mainCss = css`background-image: url("${bgImg}");`;

  return (
    <section css={mainCss} className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container" />
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
