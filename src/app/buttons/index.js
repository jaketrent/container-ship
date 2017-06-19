import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import * as actions from './actions'
import css from './index.css'
import store from '../store'

const mapPropsToDispatch = dispatch => ({
  addContainer(color) {
    dispatch(actions.addContainer(color))
  }
})

const Button = props =>
  <div className={props.css.button}>
    <div className={props.css.color} style={{ backgroundColor: props.color }} />
    <button
      className={props.css.press}
      onclick={_ => props.addContainer(props.color)}
    >
      {props.letter}
    </button>
  </div>

const Buttons = props =>
  <div className={props.css.buttons}>
    <Button {...props} color="red" letter="Q" />
    <Button {...props} color="yellow" letter="W" />
    <Button {...props} color="blue" letter="E" />
  </div>

export default connect(null, mapPropsToDispatch, store)(styleable(css)(Buttons))
