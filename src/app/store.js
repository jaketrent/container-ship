import { createStore } from 'seaducks'

import key from './key/reducer'
import stack from './stack/reducer'

export default createStore({
  key,
  stack
})
