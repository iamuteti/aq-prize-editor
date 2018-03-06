// @flow
import type { User } from './Types';

export interface IAuthenticator {
  isAuthenticated(): boolean;
  currentUser: ?User;
  login(cb: () => void): void;
  logout(cb: () => void): void;
}
