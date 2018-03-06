// @flow
import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import type { User, ParentRoute } from '../../core/Types';

// import Example from '../editor';

type Props = {
  appName: React$Element<any> | string,
  appNameSmall: React$Element<any> | string,
  user: User,
  routes: Array<ParentRoute>
}

export default class Home extends Component<Props> {

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

  render() {
    const flatMap = (arr, fn) => (
      arr.map(fn).reduce((a, b) => { return a.concat(b); }, [])
    )

    const content = flatMap(this.props.routes, (item, index) => {
      return React.createElement(item.component, { key: index, ...this.props });
      // return item.sublinks.map((subItem, subIndex) => {
      //   return React.createElement(subItem.component, { key: index, ...this.props });
      // });
    });

    return (
      <div className="wrapper">
        <Header
          appName={this.props.appName}
          appNameSmall={this.props.appNameSmall}
          user={this.props.user}
        />
        <aside className="main-sidebar">
          <SideBar
            user={this.props.user}
            routes={this.props.routes}
          />
        </aside>
        <div className="content-wrapper">
          {content}
          {/* <Route path='/editor' component={Example}/> */}
        </div>
        <Footer />
      </div>
    );
  }
}