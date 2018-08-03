// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {string, array, func} from 'prop-types';
import moment from 'moment'
import {addTournamentRequest, loadUserGiftBalancesRequest} from '../../../redux/actions/prizeActions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: '',
      balance: '',
      prize_type: '',
      quantity: ''
    };
  }

  componentDidMount() {
    this.props.dispatchLoadUserGiftBalances()
  };

  onChangeHandler = evt => {
    const {name, value} = evt.target;
    this.setState({[name]: value})
  };

  updatePrizeState = evt => {
    const {value} = evt.target;
    const gift = this.props.gifts.find((obj) => {
      return obj.id === value
    });

    this.setState({
      prize: evt.target.value,
      balance: gift.balance
    })
  };

  onSelection = evt => {
    this.setState({
      selection: evt.currentTarget.value
    })
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      prize: '',
      balance: '',
      prize_type: ''
    })
  };

  handleSubmit = e => {
    e.preventDefault();

    const {prize, balance, prize_type} = this.state;
    const data = {};
    // console.log('Gift: ', data);
    return this.props.dispatchAddTournamentRequest(this.props.engagementId, data)
  };

  render() {
    const {gifts} = this.props;

    return (
      <div className='box'>
        <div className='box-header with-border'>
          <h3 className='box-title'>Prize Information</h3>
        </div>
        <div className='box-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Prize</label>
                    </div>
                    <div className='col-lg-9'>
                      <select className='form-control' name='prize' value={this.state.prize}
                              onChange={this.updatePrizeState}>
                        <option value="">Choose prize</option>
                        {gifts.map((gift, i) =>
                          <option key={i} value={gift.id}>{gift.name}</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Balance</label>
                    </div>
                    <div className='col-lg-9'>
                      <p>{this.state.balance}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Prize Type</label>
                    </div>
                    <div className='col-lg-9'>
                      <select className='form-control' name='prize_type' value={this.state.prize_type}
                              onChange={this.updatePrizeState}>
                        <option value="">Choose prize type</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Quantity</label>
                    </div>
                    <div className='col-lg-9'>
                      <input type='text' name='quantity' value={this.state.quantity} className='form-control' onChange={this.onChangeHandler}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <label>Distribution</label>
                  </div>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-3'>
                            <div className='form-group' style={{ marginTop: '-10px' }}>
                              <div className='radio'>
                                <label>
                                  <input type='radio' id='byConsecutive'
                                         name='consecutive' value='consecutive' onChange={this.onSelection}/>
                                  Consecutive
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-9'>
                            <div className='row'>
                              <div className='col-lg-6'>
                                <div className='row'>
                                  <div
                                    className={'form-group' + (this.state.from !== '' && this.state.from < 1 ? ' has-error' : '')}>
                                    <div className='col-lg-5'>
                                      <label>From</label>
                                    </div>
                                    <div className='col-lg-7'>
                                      <input type='text' className='form-control' name='from' value={this.state.from}
                                             onChange={this.onChangeHandler}/>
                                      {(this.state.from !== '' && this.state.from < 1 ?
                                        <span className='help-block'>Value has to be greater than 0</span> : null)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className='row'>
                                  <div
                                    className={'form-group' + (this.state.to !== '' && this.state.from !== '' && (+(this.state.to) < +(this.state.from)) ? ' has-error' : '')}>
                                    <div className='col-lg-5'>
                                      <label>To</label>
                                    </div>
                                    <div className='col-lg-7'>
                                      <input type='text' className='form-control' name='to' value={this.state.to}
                                             onChange={this.onChangeHandler}/>
                                      {(this.state.to !== '' && (+(this.state.to) < +(this.state.from)) ?
                                        <span className='help-block'>Value has to be greater than from</span> : null)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-3'>
                            <div className='form-group' style={{ marginTop: '-10px' }}>
                              <div className='radio'>
                                <label>
                                  <input type='radio' id='byDispersed'
                                         name='dispersed' value='dispersed' onChange={this.onSelection}/>
                                  Dispersed
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-9'>
                            <div className='form-group'>
                              <select className='form-control' name='' value=''
                                      onChange={this.updatePrizeState}>
                                <option value="" />
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='pull-right'>
                  <button className='btn bg-navy' type='button' onClick={this.resetForm}>Clear</button>
                  &nbsp;&nbsp;
                  <button type='submit' className='btn btn-success'>Add</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  engagementId: string.isRequired,
  gifts: array,
  dispatchLoadUserGiftBalances: func,
  dispatchAddTournamentRequest: func
};

const mapStateToProps = state => {
  return {
    gifts: state.prize.loadUserGiftBalancesSuccessful
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUserGiftBalances() {
      dispatch(loadUserGiftBalancesRequest())
    },
    dispatchAddTournamentRequest(id, data) {
      dispatch(addTournamentRequest(id, data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)
