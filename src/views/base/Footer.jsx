// @flow
import React, { Component } from 'react';

type Props = {
  company: string
}

export default class Footer extends Component<Props> {

  static defaultProps = {
    company: "Company"
  };

  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <strong>v1.0.0</strong>
        </div>
        <strong>Copyright &copy; 2018 <a href="#">{this.props.company}</a>.</strong> All rights reserved.
      </footer>
    );
  }
}