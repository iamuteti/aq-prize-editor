// @flow
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import type { User } from '../../core/Types';
import type { IAuthenticator } from '../../core/Interfaces';
import { Injector, Types } from '../../core';

type Props = {
  appName: React$Element<any> | string,
  appNameSmall: React$Element<any> | string,
  user: User
}

type State = {
  redirectToLogin: boolean;
}

export default class Header extends React.Component<Props, State> {
  static defaultProps = {
    appName: <span><b>Admin</b>LTE</span>,
    appNameSmall: <span><b>A</b>LT</span>,
    user: {
      id: 'id',
      displayName: 'John Smith',
      avatarBig: '/img/user-male.png',
      avatarSmall: '/img/user-male.png'
    }
  };

  authenticator: IAuthenticator;

  constructor(props: Props) {
    super(props);
    this.authenticator = Injector.resolve(Types.authenticator);
    this.state = {
      redirectToLogin: false
    };
  }

  logout() {
    this.authenticator.logout(() => {
      this.setState({redirectToLogin: true});
    });
  }

  render() {
    if (this.state.redirectToLogin) {
      return <Redirect to={{
        pathname: '/login'
      }} />
    }
    else {
      return (
        <header className="main-header">
          <Link to="/" className="logo">
            <span className="logo-mini">{this.props.appNameSmall}</span>
            <span className="logo-lg">{this.props.appName}</span>
          </Link>
          <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src={this.props.user.avatarSmall} className="user-image" alt="User Image" />
                    <span className="hidden-xs">{this.props.user.displayName}</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src={this.props.user.avatarSmall} className="img-circle" alt="User Image" />
                      <p>
                        {this.props.user.displayName}
                      </p>
                    </li>
                    <li className="user-footer">
                      <div className="pull-right">
                        <a href="/login" className="btn btn-default btn-flat" onClick={this.logout.bind(this)}>Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
    }
  }
}