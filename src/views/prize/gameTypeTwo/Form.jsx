// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {array, func} from 'prop-types';
import {loadDenominationsRequest} from '../../../redux/actions/prizeActions';

class Form extends Component {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      denomination: '',
      winners: ''
    };
  }

  componentDidMount() {
    this.props.dispatchLoadDenominations()
  };

  onChangeHandler = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  };

  updateDenominationState = evt => {
    this.setState({ denomination: evt.target.value })
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      denomination: '',
      winners: ''
    })
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {

    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Bet Prize Information</h3>
        </div>
        <div className="box-body">
          <form onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Denomination</label>
                    </div>
                    <div className='col-lg-9'>
                      <select className='form-control' name='denomination' value={this.state.denomination} onChange={this.updateDenominationState}>
                        <option value="">Choose denomination</option>
                        {this.props.denominations.map((denomination, i) =>
                          <option key={i} value={denomination}>{denomination}</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>No. of Winners</label>
                    </div>
                    <div className='col-lg-9'>
                      <input type='text' className='form-control' name='winners' value={this.state.winners} onChange={this.onChangeHandler} />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label>Total Fund:</label>
                    </div>
                    <div className='col-lg-9'>
                      {this.state.winners * this.state.denomination}
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='pull-right'>
                  <button className='btn bg-navy' type='button' onClick={this.resetForm}>Clear</button>
                  &nbsp;&nbsp;
                  <button className='btn btn-success'>Add</button>
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
  denominations: array,
  dispatchLoadDenominations: func
};

const mapStateToProps = state => {
  return {
    denominations: state.prize.loadDenominationsSuccessful
  }
};

const mapDispatchToProps = dispatch => {
  return{
    dispatchLoadDenominations() {
      dispatch(loadDenominationsRequest())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)
