import wakt from 'wakt'
import styleable from 'styleable'

import css from './ship-top.css'

export default styleable(css)(props =>
  <div className={props.css.shipTop}>
    {props.children}
  </div>
)
