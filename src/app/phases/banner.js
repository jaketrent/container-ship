import wakt from 'wakt'
import styleable from 'styleable'

import css from './banner.css'
import Stack from '../stack'
import Buttons from '../buttons'
import Key from '../key'

export default styleable(css)(props =>
  <div className={props.css.fullscreen}>
    <div className={props.css.banner} style={{ background: props.color }}>
      {props.children}
    </div>
  </div>
)
