// @flow
import type { IAuthenticator } from '../Interfaces';
import type { User } from '../Types';

const dummyUser: User = {
  id: 'cNk-8AU1EeaGrCIACqyLYA',
  displayName: 'John Smith',
  avatarBig: '/img/user-male.png',
  avatarSmall: '/img/user-male.png',
  key: 'qRHhQnGee1AsPCpAylXCiohPgrVc35fe',
  algorithm: 'sha256'
}

export default class AlwaysLoggedInAuthenticator implements IAuthenticator {

  currentUser: ?User;

  constructor() {
    this.currentUser = dummyUser;
  }

  isAuthenticated(): boolean {
    return true;
  }
  
  login(cb: () => void) {
    setTimeout(cb, 100);
  }

  logout(cb: () => void) {
    setTimeout(cb, 100);
  }
}