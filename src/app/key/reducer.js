import * as array from '../common/array'
import * as rand from '../common/rand'
import { TYPES } from './actions'

const initialState = {
  containers: []
}

const init = (state, action) => ({
  ...state,
  containers: array.of(action.count || 3).map(_ => ({
    color: rand.from(['red', 'yellow', 'blue'])
  }))
})

const reset = (state, action) => ({
  ...state,
  containers: []
})

// TODO: reducer helper
export default (state = initialState, action = {}) => {
  const handlers = {
    [TYPES.INIT]: init,
    [TYPES.RETRY]: init,
    [TYPES.RESET]: reset
  }

  return handlers[action.type] ? handlers[action.type](state, action) : state
}
