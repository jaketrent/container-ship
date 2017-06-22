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

class Buttons extends wakt.Component {
  render() {
    return (
      <div className={this.props.css.buttons}>
        <AddContainer {...this.props} color="red" letter="Q" />
        <AddContainer {...this.props} color="yellow" letter="W" />
        <AddContainer {...this.props} color="blue" letter="E" />
      </div>
    )
  }
}

export default connect(null, mapPropsToDispatch, store)(styleable(css)(Buttons))
