// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Example from './Example';
import ExampleWithParam from './ExampleWithParam';

type Props = {
}

type State = {
}

export default class ExampleMain extends React.Component<Props, State> {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Route path='/example' component={Example} exact/>
        <Route path='/example/:id' component={ExampleWithParam} exact/>
      </div>
    );
  }
}
