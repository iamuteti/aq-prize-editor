// @flow
import { UserClient } from 'aq-api-client';
import type { IAuthenticator } from '../Interfaces';
import type { User } from '../Types';

const KEY = "com.aq.web.portal.user";

export default class FacebookAuthenticator implements IAuthenticator {

  currentUser: ?User;
  FB: any;
  userClient: UserClient;

  constructor(environment: 'live' | 'devt') {
    this.userClient = new UserClient({
      id: 'cAAd4sWzEeerxM7CeLa1Cg',
      key: 'jksdhf89327498sdfh0234809sjkfhsk2342789sdf'
    }, environment);

    this.currentUser = this.getUser();

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '989737404451374',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.12'
      });
      // TODO: Make sure window.onFacebookSDKReady is already loaded
      this.FB = window.FB;
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      // $FlowFixMe
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
    if (this.FB !== null) {
      this.FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          this.FB.api('/me', { fields: 'email,name,friends,picture' }, (response) => {
            if (!response || response.error) {
              console.log(`Unable to login to FB ${JSON.stringify(response.error)}`);
            }
            else {
              this.userClient.getFacebookUser(response.id)
                .then((response) => {
                  this.saveUser(
                    {
                      ...response,
                      key: response.apiKey,
                      algorithm: 'sha256'
                    }
                  );
                  console.log('Good to see you, ' + response.id + ' ' + response.name + '.');
                  setTimeout(cb, 100);
                })
                .catch((e) => {
                  console.error(`Unable to retrieve user: ${e}`);
                });
            }
          });
        }
        else {
          this.FB.login((response) => {
            if (response.authResponse) {
              this.FB.api('/me', { fields: 'email,name,friends,picture' }, (response) => {
                if (!response || response.error) {
                  console.log(`Unable to login to FB ${JSON.stringify(response.error)}`);
                }
                else {
                  this.userClient.getFacebookUser(response.id)
                    .then((response) => {
                      this.saveUser(
                        {
                          ...response,
                          key: response.apiKey,
                          algorithm: 'sha256'
                        }
                      );
                      console.log('Good to see you, ' + response.id + ' ' + response.name + '.');
                      setTimeout(cb, 100);
                    })
                    .catch((e) => {
                      console.error(`Unable to retrieve user: ${e}`);
                    });
                  ;
                }
              });
            } else {
              console.log('User cancelled login or did not fully authorize.');
            }
          });
        }
      });
    }
  }

  logout(cb: () => void) {
    this.saveUser(null);
    setTimeout(cb, 100);
    // this.FB.logout(() => {
    // });    
  }
}