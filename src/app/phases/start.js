import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import * as array from '../common/array'
import Button from '../common/ui/button'
import css from './start.css'
import * as keyActions from '../key/actions'
import Ocean from '../common/ui/ocean'
import store from '../store'
import Title from '../common/ui/title'

const mapDispatchToProps = dispatch => ({
  start(count) {
    dispatch(keyActions.init(count))
  }
})

const Stack = props =>
  <div className={props.css.stack}>
    {array
      .of(props.count)
      .map((_, i) =>
        <div
          className={props.css.container}
          key={i}
          style={{ background: props.color }}
        />
      )}
  </div>

const Option = props =>
  <div className={props.css.option}>
    <div className={props.css.stack}>
      <Stack {...props} />
    </div>
    <Button ev-click={_ => props.start(props.count)}>
      {props.label}
    </Button>
  </div>

const Difficulty = props =>
  <div className={props.css.difficulty}>
    <Option {...props} label="Drydock" count={3} color="blue" />
    <Option {...props} label="Open Water" count={6} color="yellow" />
    <Option {...props} label="Somalia" count={12} color="red" />
  </div>

const Start = props =>
  <Ocean>
    <Difficulty {...props} />
    <Title />
  </Ocean>

export default connect(null, mapDispatchToProps, store)(styleable(css)(Start))
