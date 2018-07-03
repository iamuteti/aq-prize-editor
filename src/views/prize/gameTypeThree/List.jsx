// @flow
import React from 'react';

type Props = {
}

type State = {
}

export default class List extends React.Component<Props, State> {

  static defaultProps = {};

  constructor(props: Props) {
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
              <th>From</th>
              <th>To</th>
              <th>Limit</th>
              <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><input type='checkbox' /></td>
              <td>Fitness Tracker Band</td>
              <td>By Place</td>
              <td>1</td>
              <td>1</td>
              <td />
              <td>1</td>
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
