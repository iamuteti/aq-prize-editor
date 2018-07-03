import initialState from './initialState'
import {
  LOAD_PRIZES_SUCCESSFUL
} from '../actions/allActions'

export default function prize(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRIZES_SUCCESSFUL:
      return loadPrizesReducer(state, action);
    default:
      return state
  }
}

function loadPrizesReducer(state, action) {
  return Object.assign({}, state, {loadPrizesSuccessful: action.loadPrizesSuccessful})
}
