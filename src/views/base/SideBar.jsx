// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { User, ParentRoute } from '../../core/Types';

type Props = {
  user: User,
  routes: Array<ParentRoute>
}

export default class SideBar extends Component<Props> {

  static defaultProps = {
    user: {
      id: 'id',
      displayName: 'John Smith',
      avatarBig: '/img/user-male.png',
      avatarSmall: '/img/user-male.png'
    }
  };

  render(){
    const links = this.props.routes.map((item, index) => {
      let className = item.className ? `fa ${item.className}` : 'fa fa-link';
      let path = item.path ? item.path : '#';
      let liClassName = item.sublinks.length > 0 ? 'treeview' : '';
      return <li key={index} className={liClassName}>
        <Link to={path}><i className={className}></i> <span>{item.name}</span></Link>
      </li>
    });

    return (
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src={this.props.user.avatarSmall} className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>{this.props.user.displayName}</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          {links}
        </ul>
      </section>
    );
  }

}