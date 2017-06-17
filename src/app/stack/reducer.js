import { TYPES as BUTTON_TYPES } from '../buttons/actions'

const rand = (min = -8, max = 8) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const initialState = {
  containers: []
}

const addContainer = (state, action) => ({
  ...state,
  containers: state.containers.concat([{ color: action.color, offset: rand() }])
})

export default (state = initialState, action = {}) => {
  const handlers = {
    [BUTTON_TYPES.ADD_CONTAINER]: addContainer
  }

  return handlers[action.type] ? handlers[action.type](state, action) : state
}
