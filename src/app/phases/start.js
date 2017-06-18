import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import * as array from '../common/array'
import css from './start.css'
import * as keyActions from '../key/actions'
import ShipTop from '../common/ui/ship-top'
import store from '../store'

const mapDispatchToProps = dispatch => ({
  start(count) {
    dispatch(keyActions.init(count))
  }
})

const Stack = props =>
  <div className={props.css.stack}>
    {array
      .of(props.count)
      .map(_ =>
        <div
          className={props.css.container}
          style={{ background: props.color }}
        />
      )}
  </div>

const Option = props =>
  <div className={props.css.option}>
    <Stack {...props} />
    <button
      className={props.css.button}
      onclick={_ => props.start(props.count)}
    >
      {props.label}
    </button>
  </div>

const Difficulty = props =>
  <div className={props.css.difficulty}>
    <Option {...props} label="Drydock" count={3} color="blue" />
    <Option {...props} label="Open Water" count={6} color="yellow" />
    <Option {...props} label="Somalia" count={12} color="red" />
  </div>

const Start = props =>
  <ShipTop>
    <Difficulty {...props} />
    <h1>Container Ship!</h1>
  </ShipTop>

export default connect(null, mapDispatchToProps, store)(styleable(css)(Start))
