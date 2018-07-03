// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Prize from './Prize';
import GameTypeThree from './gameTypeThree/GameTypeThree';

type Props = {
}

type State = {
}

export default class PrizeMain extends React.Component<Props, State> {

  static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Route path='/prize' component={Prize} exact/>
        <Route path='/game-type-three' component={GameTypeThree} exact/>
      </div>
    );
  }
}
