// @flow
import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import PrizeInfo from '../commons/prizeInfo';
import {func, object} from 'prop-types';
import {loadEngagementByIdRequest} from '../../../redux/actions/prizeActions';
import {connect} from 'react-redux';

class GameTypeOne extends Component {
  componentDidMount () {
    this.props.dispatchGameInformation(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <section className='content-header'>
          <h1>Prize Editor</h1>
        </section>
        <section className='content'>
          <PrizeInfo prize={this.props.prize} />
          <List engagementId={this.props.match.params.id} />
          <Form engagementId={this.props.match.params.id} />
        </section>
      </div>
    );
  }
}

GameTypeOne.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GameTypeOne)
