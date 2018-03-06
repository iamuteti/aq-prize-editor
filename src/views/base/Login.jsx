// @flow
import React from 'react';
import {
  Redirect
} from 'react-router-dom';
import type { IAuthenticator } from '../../core/Interfaces';
import { Injector, Types } from '../../core';

type Props = {
  appName: React$Element<any> | string
}

type State = {
  redirectToReferrer: boolean
}

export default class MyClass extends React.Component<Props, State> {

  static defaultProps = {
    appName: <span><b>Admin</b>LTE</span>
  };

  authenticator: IAuthenticator;

  constructor(props: Props) {
    super(props);
    this.authenticator = Injector.resolve(Types.authenticator);
    this.state = {
      redirectToReferrer: this.authenticator.isAuthenticated()
    };
  }

  authenticate() {
    if (this.authenticator.isAuthenticated()) {
      this.setState({ redirectToReferrer: true });
    }
    else {
      this.authenticator.login(() => {
        this.setState({ redirectToReferrer: true });
      });
    }
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={{
        pathname: '/'
      }} />
    }
    else {
      return (
        <div className="login-box">
          <div className="login-logo">
            <a href="/">{this.props.appName}</a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <div className="social-auth-links text-center">
              <a href="#" className="btn btn-block btn-social btn-facebook btn-flat" onClick={this.authenticate.bind(this)}><i className="fa fa-facebook"></i> Sign in using
                Facebook</a>
            </div>
          </div>
        </div>
      );
    }
  }
}
