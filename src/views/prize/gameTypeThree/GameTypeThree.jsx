// @flow
import React from 'react';
import List from './List';
import Form from './Form';

type Props = {
}

type State = {
}

export default class GameTypeThree extends React.Component<Props, State> {

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
          <h1>Prize Editor</h1>
        </section>
        <section className='content'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="box">
                <div className="box-body">
                  <div className='row'>
                    <div className='col-lg-2'>
                      <div className='img-thumbnail'>
                        <img src='http://via.placeholder.com/100x200' alt='Game 3 Prize' />
                      </div>
                    </div>
                    <div className='col-lg-10'>
                      <h3>Digital Race</h3>
                      <div>
                        <p><span className='prize-label'>Game Type:</span><span className='prize-value'>Game 3</span></p>
                        <p><span className='prize-label'>Publish Date:</span><span className='prize-value'>1-Mar-2018</span></p>
                        <p><span className='prize-label'>Date Created:</span><span className='prize-value'>26-Feb-2018</span></p>
                        <p><span className='prize-label'>Created By:</span><span className='prize-value'>UA Admin 1</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <List />
            </div>
            <div className='col-lg-12'>
              <Form />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
