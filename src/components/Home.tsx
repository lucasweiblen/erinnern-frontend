/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

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

export default Home;
