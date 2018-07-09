// @flow
import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import PrizeInfo from '../commons/prizeInfo';

class GameTypeThree extends Component {

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
          <h1>Prize Editor</h1>
        </section>
        <section className='content'>
          <PrizeInfo />
          {/*<List />*/}
          <Form />
        </section>
      </div>
    );
  }
}

export default GameTypeThree
