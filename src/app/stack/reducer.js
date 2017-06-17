import { TYPES as BUTTON_TYPES } from '../buttons/actions'

const initialState = {
  containers: []
}

const addContainer = (state, action) => ({
  ...state,
  containers: [{ color: action.color }].concat(state.containers)
})

export default (state = initialState, action = {}) => {
  const handlers = {
    [BUTTON_TYPES.ADD_CONTAINER]: addContainer
  }

  return handlers[action.type] ? handlers[action.type](state, action) : state
}
