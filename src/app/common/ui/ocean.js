import wakt from 'wakt'
import styleable from 'styleable'

import css from './ocean.css'

export default styleable(css)(props =>
  <div className={props.css.ocean}>
    {props.children}
  </div>
)
