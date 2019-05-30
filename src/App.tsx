/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

const bgColorNavbar = '#115677';
const bgColorBtn = '#9ADBF9';
const btnStyle = css`
  background-color: ${bgColorBtn};
  border-radius: 12px;
  color: #115677;
`;

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
              <a css={btnStyle} className="button">
                Sign in
              </a>
              <a css={btnStyle} className="button">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Main: React.FC = () => {
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
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
