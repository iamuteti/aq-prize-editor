// @flow
import React from 'react';

type Props = {
  match: Object
}

type State = {
}

export default class ExampleWithParam extends React.Component<Props, State> {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <section className='content-header'>
          <h1>Example<small>with parameter</small></h1>
        </section>
        <section className='content'>
          <div>URL Parameter is {this.props.match.params.id}</div>
        </section>
      </div>
    );
  }
}