import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import css from './index.css'
import ShipTop from '../common/ui/ship-top'
import store from '../store'

const mapStateToProps = state => ({
  containers: state.stack.containers
})

const Container = props =>
  <div
    className={props.css.container}
    style={{
      backgroundColor: props.color,
      transform: `translateX(${props.offset}px)`
    }}
  />

const Stack = props =>
  <ShipTop>
    {props.containers.map(c => <Container css={props.css} {...c} />)}
  </ShipTop>

export default connect(mapStateToProps, null, store)(styleable(css)(Stack))
