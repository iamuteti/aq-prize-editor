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
      quantity: '',
      startDate: '',
      endDate: '',
      from: '',
      to: '',
      max_count: '',
      balance: '',
      selection: ''
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
      quantity: '',
      from: '',
      to: '',
      max_count: ''
    })
  };

  handleSubmit = e => {
    e.preventDefault();

    const {startDate, endDate, prize, quantity, from, to, max_count} = this.state;
    const data = {
      startDate,
      endDate,
      prizes: [{
        giftId: prize,
        fromRank: +from,
        toRank: +to
      }]
    };
    console.log('Gift: ', data);
    return this.props.dispatchAddTournamentRequest(this.props.engagementId, data)
  };

  render() {
    const {gifts} = this.props;

    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Prize Information</h3>
        </div>
        <div className="box-body">
          <form onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col-lg-7'>
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
              <div className='col-lg-7'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Date</label>
                    </div>
                    <div className='col-lg-9'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='row'>
                            <div
                              className={'form-group' + (this.state.endDate !== '' && this.state.startDate === '' ? ' has-error' : '')}>
                              <div className='col-lg-3'>
                                <label>Start</label>
                              </div>
                              <div className='col-lg-9'>
                                <input type='date' className='form-control' name='startDate'
                                       value={this.state.startDate}
                                       onChange={this.onChangeHandler}/>
                                {(this.state.endDate !== '' && this.state.startDate === '' ?
                                  <span className='help-block'>Start date cannot be empty</span> : null)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='row'>
                            <div
                              className={'form-group' + (moment(this.state.endDate).unix() < moment(this.state.startDate).unix() ? ' has-error' : '')}>
                              <div className='col-lg-3'>
                                <label>End</label>
                              </div>
                              <div className='col-lg-9'>
                                <input type='date' className='form-control' name='endDate'
                                       value={this.state.endDate}
                                       onChange={this.onChangeHandler}/>
                                {this.state.endDate !== '' && (moment(this.state.endDate).unix() < moment(this.state.startDate).unix() ?
                                  <span
                                    className='help-block'>End date cannot be earlier than start date</span> : null)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <div className='form-group'>
                      <div className='radio'>
                        <label>
                          <input type="radio" id="byLevel"
                                 name="contact" value="by_place" onChange={this.onSelection}/>
                          By place
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
              <div className='col-lg-7'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <label style={{fontWeight: 'normal', marginLeft: '20px'}}>Quantity:</label>
                  </div>
                  <div className='col-lg-9'>
                    {this.state.from && this.state.to && this.state.from ? <p>
                      <span className='quantity'>{(this.state.to - this.state.from) + 1}</span>
                      {this.state.balance < ((this.state.to - this.state.from) + 1) ? <span
                        style={{
                          paddingLeft: '10px',
                          color: '#dd4b39'
                        }}>Quantity cannot be more than {this.state.balance}</span> : null}
                    </p> : null}
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <div className='form-group'>
                      <div className='radio'>
                        <label>
                          <input type="radio" id="allPlayers"
                                 name="contact" value="all_players" onChange={this.onSelection}/>
                          All players
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='row'>
                          <div
                            className={'form-group' + (this.state.max_count !== '' && (+(this.state.balance) > +(this.state.max_count)) ? ' has-error' : '')}>
                            <div className='col-lg-5'>
                              <label>Max Count</label>
                            </div>
                            <div className='col-lg-7'>
                              <input type='text' className='form-control' name='max_count' value={this.state.max_count}
                                     onChange={this.onChangeHandler}/>
                              {(this.state.max_count !== '' && (+(this.state.balance) < +(this.state.max_count)) ?
                                <span
                                  className='help-block'>Value cannot be more than {this.state.balance}</span> : null)}
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
