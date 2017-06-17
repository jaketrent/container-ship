const reduceInitialState = reducers =>
  Object.keys(reducers).reduce((acc, name) => {
    acc[name] = reducers[name]()
    return acc
  }, {})

const reduce = (reducers, state, action) =>
  Object.keys(reducers).reduce((acc, name) => {
    acc[name] = reducers[name](state[name], action)
    return acc
  }, state)

class Store {
  constructor(reducers = {}, state = {}) {
    this.reducers = reducers
    this.state = { ...reduceInitialState(reducers), ...state }

    this.subscribers = []

    this.dispatch = this.dispatch.bind(this)
  }
  getState() {
    return { ...this.state }
  }
  getPrevState() {
    return this.prevState
  }
  subscribe(fn) {
    this.subscribers = this.subscribers.concat([fn])
  }
  dispatch(action) {
    this.prevState = this.state
    this.state = reduce(this.reducers, this.state, action)

    this.notifySubscribers()
  }
  notifySubscribers() {
    this.subscribers.forEach(s => s(this.prevState, this.state))
  }
}

const createStore = (reducers, state) => new Store(reducers, state)

export { createStore }
