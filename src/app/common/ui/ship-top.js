import wakt from 'wakt'
import styleable from 'styleable'

import css from './ship-top.css'

export default styleable(css)(props =>
  <section className={props.css.shipTop}>
    {props.children}
  </section>
)
