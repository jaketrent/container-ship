import wakt from 'wakt'
import styleable from 'styleable'

import css from './index.css'

export default styleable(css)(props =>
  <div className={props.css.app}>
    <h1>Container Ship</h1>
  </div>
)
