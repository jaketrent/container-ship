import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import * as actions from './actions'
import Button from '../common/ui/button'
import css from './index.css'
import store from '../store'

const mapPropsToDispatch = dispatch => ({
  addContainer(color) {
    dispatch(actions.addContainer(color))
  }
})

const AddContainer = props =>
  <div className={props.css.addContainer}>
    <div className={props.css.color} style={{ backgroundColor: props.color }} />
    <Button
      css={{ button: props.css.button }}
      onclick={_ => props.addContainer(props.color)}
    >
      {props.letter}
    </Button>
  </div>

const Buttons = props =>
  <div className={props.css.buttons}>
    <AddContainer {...props} color="red" letter="Q" />
    <AddContainer {...props} color="yellow" letter="W" />
    <AddContainer {...props} color="blue" letter="E" />
  </div>

export default connect(null, mapPropsToDispatch, store)(styleable(css)(Buttons))
