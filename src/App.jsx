// @flow

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import type { IAuthenticator } from './core/Interfaces';
import type { ParentRoute, User } from './core/Types';
import { Injector, Types } from './core';
import { Home, Login } from './views/base';

const APP_NAME = <b>Admin</b>;
const APP_NAME_SMALL = <b>A</b>; 

function setupDependencies(user: User) {
  // Setup additional dependencies that depend on currently logged-on user
}

const PrivateRoute = (props: { authenticator: IAuthenticator, component: any, routes: any}) => {
  let { authenticator, component, routes, ...rest } = props;
  return <Route {...rest} render={props => {
    if (authenticator.isAuthenticated() && authenticator.currentUser != null) {

      setupDependencies(authenticator.currentUser);
      
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
            <Switch>
              <Route path='/login' render={props => <Login appName={APP_NAME}/>}/>
              <PrivateRoute path='/' component={Home} authenticator={this.authenticator} routes={this.props.routes} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}