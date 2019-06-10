/** @jsx jsx */
import React, {useState, useContext} from 'react';
import {css, jsx} from '@emotion/core';
import {AppContext} from '../context/appContext';

const SignIn: React.FC = () => {
  const {signIn} = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      signIn();
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

export default SignIn;
