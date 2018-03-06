// @flow

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import type { IAuthenticator } from './core/Interfaces';
import type { ParentRoute } from './core/Types';
import { Injector, Types } from './core';
import { Home, Login } from './views/base';

const APP_NAME = <b>Admin</b>;
const APP_NAME_SMALL = <b>A</b>; 

const PrivateRoute = (props) => {
  let { authenticator, component, routes, ...rest } = props;
  return <Route {...rest} render={props => {
    if (authenticator.isAuthenticated()) {
      // $FlowFixMe
      return React.createElement(component, {
        ...rest,
        user: authenticator.currentUser,
        appName: APP_NAME,
        appNameSmall: APP_NAME_SMALL,
        routes: routes
      });
    }
    else {
      return (
        <Redirect to={{
          pathname: '/login'
        }} />
      );
    }
  }}
  />
}

type Props = {
  routes: Array<ParentRoute>
}

export default class App extends Component<Props> {

  authenticator: IAuthenticator;

  constructor(props: Props) {
    super(props);
    this.authenticator = Injector.resolve(Types.authenticator);
  }

  render() {
    return (
      <Router>
        <div style={{height: "100%"}}>
          <div>
            <Route path='/login' render={props => <Login appName={APP_NAME}/>}/>
            <PrivateRoute path='/' component={Home} authenticator={this.authenticator} routes={this.props.routes} />
          </div>
        </div>
      </Router>
    )
  }
}