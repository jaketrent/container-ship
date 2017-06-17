import wakt from 'wakt'
import styleable from 'styleable'

import css from './start.css'
import ShipTop from '../common/ui/ship-top'

// TODO: move this to some start click even later
/* import store from '../store'
 * import * as keyActions from '../key/actions'
 * store.dispatch(keyActions.init())
 * */

export default styleable(css)(props =>
  <ShipTop>
    <h1>Container Ship!</h1>
  </ShipTop>
)
