/** @jsx jsx */
import React from 'react';
import {Link} from 'react-router-dom';
import {css, jsx} from '@emotion/core';

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

export default Navbar;
