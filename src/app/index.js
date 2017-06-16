import wakt from 'wakt'
import styleable from 'styleable'

import Buttons from './buttons'
import css from './index.css'
import Stack from './stack'

export default styleable(css)(props =>
  <div className={props.css.app}>
    <h1>Container Ship</h1>
    <div>more stuff</div>
    <Buttons />
  </div>
)
