export const SIGN_IN = 'SIGN_IN';
export const LOADING = 'LOADING';

export interface Url {
  id: number;
  url: string;
  tags: string[];
}

export type Token = string;

export type User = {username?: string};

export interface AppState {
  urls: Url[];
  loggedIn: boolean;
  loading: boolean;
  token: Token;
  user: User;
  fetchUrl: any;
}

export type Payload = {};

export interface Action {
  type: string;
  payload?: Payload;
}

export interface Context {
  fetchUrl?: any;
  signIn?: any;
  urls?: Url[];
}
