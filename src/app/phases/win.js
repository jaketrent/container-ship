import wakt from 'wakt'
import styleable from 'styleable'

import css from './win.css'
import Stack from '../stack'
import Buttons from '../buttons'
import Key from '../key'

export default styleable(css)(props =>
  <div className={props.css.win}>
    <div className={props.css.banner}>You Won!</div>
  </div>
)
