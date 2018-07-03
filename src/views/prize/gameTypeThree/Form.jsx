// @flow
import React from 'react';

type Props = {
}

type State = {
}

export default class Form extends React.Component<Props, State> {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      prize: '',
      quantity: '',
      from: '',
      to: '',
      max_count: ''
    };
  }

  onChangeHandler = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
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

  render() {
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
                      <select className='form-control' name='prize' value={this.state.prize} />
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
                          <input type="radio" id="contactChoice1"
                                 name="contact" value="by_place" />
                          By place
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='row'>
                          <div className='col-lg-5'>
                            <label>From</label>
                          </div>
                          <div className='col-lg-7'>
                            <input type='text' className='form-control' name='from' value={this.state.from} onChange={this.onChangeHandler} />
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='row'>
                          <div className='col-lg-5'>
                            <label>To</label>
                          </div>
                          <div className='col-lg-7'>
                            <input type='text' className='form-control' name='to' value={this.state.to} onChange={this.onChangeHandler} />
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
                    <label>Quantity:</label>
                  </div>
                  <div className='col-lg-9'>
                    {this.state.from && this.state.to ? (this.state.to - this.state.from) + 1 : null}
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
                                 name="contact" value="all_players" />
                          All players
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='row'>
                          <div className='col-lg-5'>
                            <label>Max Count</label>
                          </div>
                          <div className='col-lg-7'>
                            <input type='text' className='form-control' name='max_count' value={this.state.max_count} onChange={this.onChangeHandler} />
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
