// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
}

type State = {
}

export default class Example extends React.Component<Props, State> {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <section className='content-header'>
        <h1>Example<small>page</small></h1>
      </section>
      <section className='content'>
        <div className='row'>
          <div className='col-md-6'>
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Tasks</h3>
              </div>
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{width: 10}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: 40}}>Label</th>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td><Link to='example/1'>Update software</Link></td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td><Link to='example/2'>Clean database</Link></td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '70%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td><Link to='example/3'>Cron job running</Link></td>
                      <td>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-primary" style={{width: '30%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td><Link to='example/4'>Fix and squish bugs</Link></td>
                      <td>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-success" style={{width: '90%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-green">90%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="box-footer clearfix">
                <ul className="pagination pagination-sm no-margin pull-right">
                  <li><a href="#">&laquo;</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>      
      </div>
    );
  }
}
