// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { array, func } from 'prop-types'
import {loadPrizesRequest} from '../../redux/actions/prizeActions';

class Prize extends React.Component {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    this.props.getListOfGames()
  }

  render() {
    return (
      <div>
        <section className='content-header'>
          <h1>Prize<small>page</small></h1>
        </section>
        <section className='content'>
          <div className='row'>
            <div className='col-lg-12'>
              <Link to='/game-type-three'>Game Type 3</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Prize.propTypes = {
  games: array,
  getListOfGames: func
};

const mapStateToProps = state => {
  return {
    games: state.prize.loadPrizesSuccessful
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getListOfGames() {
      dispatch(loadPrizesRequest())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Prize)
