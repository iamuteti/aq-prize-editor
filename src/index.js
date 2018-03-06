// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import routes from './Routes';
import Injector from './core/Injector';
import { /*DummyAuthenticator,*/ AlwaysLoggedInAuthenticator } from './core/authenticators';
import { Types } from './core/Types';

import registerServiceWorker from './registerServiceWorker';

setupDependencies();

ReactDOM.render(
  <App 
    routes={routes}
  />,
  document.getElementById('root'));
  
registerServiceWorker();


function setupDependencies(){
  // Injector.register(Types.authenticator, new DummyAuthenticator());
  
  // If you want an authenticator which is always logged-in,
  // comment the top line and uncomment this one, and
  // enable the DummyAuthenticator in the imports section at the top of this file.
  Injector.register(Types.authenticator, new AlwaysLoggedInAuthenticator());
}
