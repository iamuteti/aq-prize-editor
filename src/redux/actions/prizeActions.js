import * as allActions from './allActions';
import { Injector, Types } from '../../core';
import type { IAuthenticator } from '../../core/Interfaces';
import { EngagementClient, GiftClient } from 'aq-api-client';

export function loadEngagementByIdRequest(id) {
  const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);
  const creds = {
    id: authenticator.currentUser.id,
    key: authenticator.currentUser.key
  };
  const client = new EngagementClient(creds);

  console.log('ID: ', id);
  return dispatch => {
    return client
      .get(id)
      .then(res => {
        dispatch(loadEngagementById(res.body))
      })
      .catch(error => {
        dispatch(loadEngagementById({}));
        console.error('redux: loadEngagementByIdRequest error occurred:', error)
      })
  }
}

export function loadEngagementById(data) {
  return {
    type: allActions.LOAD_ENGAGEMENT_BY_ID,
    loadEngagementById: data
  }
}

export function loadPrizesRequest() {
  const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);
  const creds = {
    id: authenticator.currentUser.id,
    key: authenticator.currentUser.key
  };
  const client = new EngagementClient(creds);

  return dispatch => {
    return client
      .getUserEngagements(null, 0, 10)
      .then(res => {
        dispatch(loadPrizesSuccessful(res.body))
      })
      .catch(error => {
        dispatch(loadPrizesSuccessful([]));
        console.error('redux: loadPrizesRequest error occurred:', error)
      })
  }
}

export function loadPrizesSuccessful(data) {
  return {
    type: allActions.LOAD_PRIZES_SUCCESSFUL,
    loadPrizesSuccessful: data
  }
}

export function loadUserGiftBalancesRequest() {
  const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);

  const creds = {
    id: authenticator.currentUser.id,
    key: authenticator.currentUser.key
  };

  const client = new GiftClient(creds);

  return dispatch => {
    return client
      .getUserGiftBalances(GiftClient.STATUS_AVAILABLE, true)
      .then(res => {
        dispatch(loadUserGiftBalancesSuccessful(res.body))
      })
      .catch(error => {
        dispatch(loadUserGiftBalancesSuccessful([]));
        console.error('redux: loadUserGiftBalancesRequest error occurred:', error)
      })
  }
}

export function loadUserGiftBalancesSuccessful(data) {
  return {
    type: allActions.LOAD_USER_GIFT_BALANCES_SUCCESSFUL,
    loadUserGiftBalancesSuccessful: data
  }
}

export function loadDenominationsRequest() {
  const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);
  const creds = {
    id: authenticator.currentUser.id,
    key: authenticator.currentUser.key
  };
  const client = new GiftClient(creds);

  return dispatch => {
    return client
      .getBetDenominations()
      .then(res => {
        dispatch(loadDenominationsSuccessful(res.body))
      })
      .catch(error => {
        dispatch(loadDenominationsSuccessful([]));
        console.error('redux: loadDenominationsSuccessful error occurred:', error)
      })
  }
}

export function loadDenominationsSuccessful(data) {
  return {
    type: allActions.LOAD_DENOMINATIONS_SUCCESSFUL,
    loadDenominationsSuccessful: data
  }
}

export function addTournamentRequest(id, data) {
  const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);
  const creds = {
    id: authenticator.currentUser.id,
    key: authenticator.currentUser.key
  };
  const client = new GiftClient(creds);


  return dispatch => {
    return client
      .addTournament(id, data)
      .then(res => {
        console.log('Tournament added: ', res.body);
        dispatch(addTournamentSuccessful(true))
      })
      .catch(error => {
        console.error('redux: addTournamentRequest error occurred:', error);
        dispatch(addTournamentSuccessful(false))
      })
  }
}

export function addTournamentSuccessful(bool) {
  return {
    type: allActions.ADD_TOURNAMENT_SUCCESSFUL,
    addTournamentSuccessful: bool
  }
}

export function loadTournamentRequest(id) {
  const authenticator: IAuthenticator = Injector.resolve(Types.authenticator);
  const creds = {
    id: authenticator.currentUser.id,
    key: authenticator.currentUser.key
  };
  const client = new GiftClient(creds);

  return dispatch => {
    return client
      .getTournament(id)
      .then(res => dispatch(loadTournamentSuccessful(res)))
      .catch(error => {
        dispatch(loadTournamentSuccessful({}));
        console.error('redux: loadTournamentsRequest error occurred:', error)
      })
  }
}

export function loadTournamentSuccessful(data) {
  return {
    type: allActions.LOAD_TOURNAMENT_SUCCESSFUL,
    loadTournamentSuccessful: data
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
