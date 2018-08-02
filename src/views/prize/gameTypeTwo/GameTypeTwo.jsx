// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func, object} from 'prop-types'
import List from './List';
import Form from './Form';
import PrizeInfo from '../commons/prizeInfo';
import {loadEngagementByIdRequest} from '../../../redux/actions/prizeActions';

class GameTypeTwo extends Component {
  componentDidMount() {
    this.props.dispatchGameInformation(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <section className='content-header'>
          <h1>Bet Editor</h1>
        </section>
        <section className='content'>
          <PrizeInfo prize={this.props.prize}/>
          <List/>
          <Form/>
        </section>
      </div>
    );
  }
}

GameTypeTwo.propTypes = {
  dispatchGameInformation: func,
  prize: object
};

const mapStateToProps = state => {
  return {
    prize: state.prize.loadEngagementById
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGameInformation(id) {
      dispatch(loadEngagementByIdRequest(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameTypeTwo)
