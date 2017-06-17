import wakt from 'wakt'

import Stack from '../stack'
import Buttons from '../buttons'
import Key from '../key'

// TODO: move this to some start click even later
import store from '../store'
import * as keyActions from '../key/actions'
store.dispatch(keyActions.init())

export default _ =>
  <div>
    Loading...
  </div>
