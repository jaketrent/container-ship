/* import { TYPES } from './actions'
 * */
const initialState = {
  containers: [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }]
}

/* const addContainer = (state, action) => ({
 *   ...state,
 *   containers: [{ color: action.color, offset: rand() }].concat(state.containers)
 * })
 * */
// TODO: reducer helper
export default (state = initialState, action = {}) => {
  /* const handlers = {
   *   [BUTTON_TYPES.ADD_CONTAINER]: addContainer
   * }

   * return handlers[action.type] ? handlers[action.type](state, action) : state*/
  return state
}
