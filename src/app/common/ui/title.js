import wakt from 'wakt'
import styleable from 'styleable'

import css from './title.css'

export default styleable(css)(props =>
  <h1 className={props.css.title}>
    Container Ship!
  </h1>
)
