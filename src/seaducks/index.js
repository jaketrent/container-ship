const reduceInitialState = reducers =>
  Object.keys(reducers).reduce((acc, name) => {
    acc[name] = reducers[name]()
    return acc
  }, {})

class Store {
  constructor(reducers = {}, state = {}) {
    this.reducers = reducers
    this.state = { ...reduceInitialState(reducers), ...state }
  }
  getState() {
    return { ...this.state }
  }
  getPrevState() {
    return this.prevState
  }
}
const createStore = (reducers, state) => new Store(reducers, state)
export { createStore }
