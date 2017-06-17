import wakt from 'wakt'
import styleable from 'styleable'

import Buttons from './buttons'
import css from './index.css'
import Key from './key'
import * as keyActions from './key/actions'
import Stack from './stack'
import store from './store'

store.dispatch(keyActions.init())

export default styleable(css)(props =>
  <div className={props.css.app}>
    <Stack />
    <Buttons />
    <h1>Container Ship!</h1>
    <Key />
  </div>
)
