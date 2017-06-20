import * as rand from '../common/rand'
import { TYPES as BUTTON_TYPES } from '../buttons/actions'
import { TYPES as KEY_TYPES } from '../key/actions'

const initialState = {
  containers: []
}

const addContainer = (state, action) => ({
  ...state,
  containers: state.containers.concat([
    { color: action.color, offset: rand.int() }
  ])
})

const reset = (state, action) => ({
  ...state,
  containers: []
})

export default (state = initialState, action = {}) => {
  const handlers = {
    [BUTTON_TYPES.ADD_CONTAINER]: addContainer,
    [KEY_TYPES.RETRY]: reset,
    [KEY_TYPES.RESET]: reset
  }

  return handlers[action.type] ? handlers[action.type](state, action) : state
}
