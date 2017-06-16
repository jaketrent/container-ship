import wakt from 'wakt'
import styleable from 'styleable'

import css from './buttons.css'

const Button = props =>
  <div className={props.css.button}>
    <div className={props.css.color} style={{ backgroundColor: props.color }} />
    <button className={props.css.press}>&nbsp;</button>
  </div>

export default styleable(css)(props =>
  <div className={props.css.buttons}>
    <Button css={props.css} color="red" />
    <Button css={props.css} color="yellow" />
    <Button css={props.css} color="blue" />
  </div>
)
