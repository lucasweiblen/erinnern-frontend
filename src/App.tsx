/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

const color = 'white';

const Header: React.FC = () => {
  return (
    <section className="section">
      <div>Header</div>
    </section>
  );
};

const Main: React.FC = () => {
  return (
    <section className="section">
      <div>Main</div>
    </section>
  );
};

const Teste: React.FC = () => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}>
      Hover to change color.
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Teste />
    </div>
  );
};

export default App;
