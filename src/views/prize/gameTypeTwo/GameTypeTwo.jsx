// @flow
import React, { Component } from 'react';
import { func } from 'prop-types'
import List from './List';
import Form from './Form';
import PrizeInfo from '../commons/prizeInfo';

class GameTypeTwo extends Component {
  componentDidMount () {
    // this.props.dispatchGameInformation()
  }
  render() {
    return (
      <div>
        <section className='content-header'>
          <h1>Bet Editor</h1>
        </section>
        <section className='content'>
          <PrizeInfo/>
          <List />
          <Form />
        </section>
      </div>
    );
  }
}

GameTypeTwo.propTypes = {
  dispatchGameInformation: func
};

export default GameTypeTwo
