// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {array, func} from 'prop-types';
import {loadPrizesRequest} from '../../../redux/actions/prizeActions';

class List extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="box">
        <div className="box-body">
          <table className="table">
            <thead>
            <tr>
              <th style={{width: 10}}>
                <input type='checkbox' />
              </th>
              <th>Prize</th>
              <th>Prize Type</th>
              <th>Distribution</th>
              <th>Qty</th>
              <th>Total Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><input type='checkbox' /></td>
              <td>Black Baller Cap</td>
              <td>EarlyBird</td>
              <td>1 -100</td>
              <td>100</td>
              <td>$500</td>
            </tr>
            </tbody>
          </table>
          <div className='col-lg-12'>
            <div className='pull-right' style={{ marginTop: '20px' }}>
              <button className='btn btn-danger' type='button'>DISCARD</button>
              &nbsp;&nbsp;
              <button className='btn btn-success'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  prizes: array,
  dispatchLoadPrizes: func
};

const mapStateToProps = state => {
  return {
    prizes: state.prize.loadPrizesSuccessful
  }
};

const mapDispatchToProps = dispatch => {
  return{
    dispatchLoadPrizes() {
      dispatch(loadPrizesRequest())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
