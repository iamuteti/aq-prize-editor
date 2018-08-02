// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {array, func, string} from 'prop-types';
import {loadTournamentRequest} from '../../../redux/actions/prizeActions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: []
    };
  }

  componentDidMount() {
    this.props.dispatchLoadTournament(this.props.engagementId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tournaments !== this.props.tournaments) {
      this.setState({
        tournaments: nextProps.tournaments
      })
    }
  }

  render() {
    return (
      <div className="box">
        <div className="box-body">
          <table className="table">
            <thead>
            <tr>
              <th style={{width: 10}}>
                <input type='checkbox'/>
              </th>
              <th>Prize</th>
              <th>Prize Type</th>
              <th>From</th>
              <th>To</th>
              <th>Limit</th>
              <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {this.state.tournaments.map((tournament, i) =>
              <tr key={i}>
                <td><input type='checkbox'/></td>
                <td>Fitness Tracker Band</td>
                <td>By Place</td>
                <td>1</td>
                <td>1</td>
                <td/>
                <td>1</td>
              </tr>
            )}
            </tbody>
          </table>
          <div className='col-lg-12'>
            <div className='pull-right' style={{marginTop: '20px'}}>
              <button disabled={this.state.tournaments.length <= 0} className='btn btn-danger' type='button'>DISCARD
              </button>
              &nbsp;&nbsp;
              <button disabled={this.state.tournaments.length <= 0} className='btn btn-success'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  engagementId: string.isRequired,
  tournaments: array,
  dispatchLoadTournament: func
};

const mapStateToProps = state => {
  return {
    tournaments: state.prize.loadTournamentSuccessful.prizes
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadTournament(id) {
      dispatch(loadTournamentRequest(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
