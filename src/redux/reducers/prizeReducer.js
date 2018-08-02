import initialState from './initialState'
import {
  LOAD_PRIZES_SUCCESSFUL,
  LOAD_DENOMINATIONS_SUCCESSFUL,
  LOAD_USER_GIFT_BALANCES_SUCCESSFUL,
  LOAD_TOURNAMENT_SUCCESSFUL,
  LOAD_ENGAGEMENT_BY_ID,
  ADD_TOURNAMENT_SUCCESSFUL
} from '../actions/allActions'

export default function prize(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRIZES_SUCCESSFUL:
      return loadPrizesSuccessfulReducer(state, action);
    case LOAD_USER_GIFT_BALANCES_SUCCESSFUL:
      return loadUserGiftBalancesReducer(state, action);
    case LOAD_DENOMINATIONS_SUCCESSFUL:
      return loadDenominationsReducer(state, action);
    case ADD_TOURNAMENT_SUCCESSFUL:
      return addTournamentSuccessfulReducer(state, action);
    case LOAD_TOURNAMENT_SUCCESSFUL:
      return loadTournamentSuccessfulReducer(state, action);
    case LOAD_ENGAGEMENT_BY_ID:
      return loadEngagementByIdReducer(state, action)
    default:
      return state
  }
}

function loadPrizesSuccessfulReducer(state, action) {
  return Object.assign({}, state, {loadPrizesSuccessful: action.loadPrizesSuccessful})
}

function loadUserGiftBalancesReducer(state, action) {
  return Object.assign({}, state, {loadUserGiftBalancesSuccessful: action.loadUserGiftBalancesSuccessful})
}

function loadDenominationsReducer(state, action) {
  return Object.assign({}, state, {loadDenominationsSuccessful: action.loadDenominationsSuccessful})
}

function addTournamentSuccessfulReducer(state, action) {
  return Object.assign({}, state, {addTournamentSuccessful: action.addTournamentSuccessful})
}

function loadTournamentSuccessfulReducer(state, action) {
  return Object.assign({}, state, {loadTournamentSuccessful: action.loadTournamentSuccessful})
}

function loadEngagementByIdReducer(state, action) {
  return Object.assign({}, state, {loadEngagementById: action.loadEngagementById})
}
