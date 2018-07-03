import * as allActions from './allActions';
import { Injector, Types } from '../../core';
import type { IAuthenticator } from '../../core/Interfaces';
import { EngagementClient } from 'aq-api-client';

const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);

let creds = {
  id: 'some_id',
  key: 'some_key'
};

let client = new EngagementClient(creds);

export function loadPrizesRequest() {
  console.log('Current user:\n', authenticator);
  // console.log(`Id = ${authenticator.currentUser.id}`);
  // console.log(`Display Name = ${authenticator.currentUser.displayName}`);

  return dispatch => {
    return client
      .getUserEngagements(null, 0, 1)
      .then(res => {
        console.log('Data: ', res);
        loadPrizesSuccessful(res.data)
      })
      .catch(error => {
        dispatch(loadPrizesSuccessful([]));
        console.error('redux: loadPrizesSuccessful error occurred:', error)
      })
  }
}

export function loadPrizesSuccessful(data) {
  return {
    type: allActions.LOAD_PRIZES_SUCCESSFUL,
    loadPrizesSuccessful: data
  }
}

// export function addGameTypeThreeRequest(data) {
//   return dispatch => {
//     return axios
//       .post('', data)
//       .then(res => {
//         dispatch(addGameTypeThreeSuccessful(res.data))
//       })
//       .catch(err => {
//         dispatch(addGameTypeThreeSuccessful({}));
//         console.error('redux: addGameTypeThreeSuccessful error occurred:', err)
//       })
//   }
// }
//
// export function addGameTypeThreeSuccessful(data) {
//   return {
//     type: allActions.ADD_GAME_TYPE_THREE_SUCCESSFUL,
//     addGameTypeThreeSuccessful: data
//   }
// }
