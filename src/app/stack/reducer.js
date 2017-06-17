import { TYPES as BUTTON_TYPES } from '../buttons/actions'

const initialState = {
  containers: [{ color: 'orange' }]
}

const addContainer = (state, action) => ({
  ...state,
  containers: state.containers.concat([{ color: action.color }])
})

export default (state = initialState, action = {}) => {
  const handlers = {
    [BUTTON_TYPES.ADD_CONTAINER]: addContainer
  }

  return handlers[action.type] ? handlers[action.type](state, action) : state
}
