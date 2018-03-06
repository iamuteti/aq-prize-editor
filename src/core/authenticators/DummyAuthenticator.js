// @flow
import type { User } from '../Types';
import type { IAuthenticator } from '../Interfaces';

const dummyUser: User = {
  id: 'cNk-8AU1EeaGrCIACqyLYA',
  displayName: 'John Smith',
  avatarBig: '/img/user-male.png',
  avatarSmall: '/img/user-male.png',
  key: 'qRHhQnGee1AsPCpAylXCiohPgrVc35fe',
  algorithm: 'sha256'
}

const KEY = "com.aq.web.portal.user";

export default class DummyAuthenticator implements IAuthenticator {

  currentUser: ?User;

  constructor() {
    this.currentUser = this.getUser();
  }

  isAuthenticated(): boolean {
    return this.currentUser != null && typeof (this.currentUser) !== 'undefined';
  }

  getUser() {
    // return null;
    if (!window.localStorage) {
      return null;
    }
    else {
      try {
        return JSON.parse(window.localStorage.getItem(KEY));
      }
      catch (e) {
        return null;
      }
    }
  }

  saveUser(user: ?User) {
    if (window.localStorage) {
      window.localStorage.setItem(KEY, JSON.stringify(user));
      this.currentUser = user;
    }
  }

  login(cb: () => void) {
    this.saveUser(dummyUser);
    setTimeout(cb, 100);
  }

  logout(cb: () => void) {
    this.saveUser(null);
    setTimeout(cb, 100);
  }
}