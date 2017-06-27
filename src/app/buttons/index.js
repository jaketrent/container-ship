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
      ev-click={_ => props.addContainer(props.color)}
    >
      {props.letter}
    </Button>
  </div>

const keys = {
  81: 'red',
  87: 'yellow',
  69: 'blue'
}
class Hook {
  constructor(props) {
    this.handleKeyUp = evt => {
      const color = keys[evt.which]
      if (color) props.addContainer(color)
    }
  }
  hook() {
    window.addEventListener('keyup', this.handleKeyUp)
  }
  unhook() {
    window.removeEventListener('keyup', this.handleKeyUp)
  }
}
const Buttons = props =>
  <div className={props.css.buttons} ev-mount={new Hook(props)}>
    <AddContainer {...props} color="red" letter="Q" />
    <AddContainer {...props} color="yellow" letter="W" />
    <AddContainer {...props} color="blue" letter="E" />
  </div>

export default connect(null, mapPropsToDispatch, store)(styleable(css)(Buttons))
