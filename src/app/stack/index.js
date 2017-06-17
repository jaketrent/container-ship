import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import css from './index.css'
import store from '../store'

const mapStateToProps = state => 
  (
    { containers: state.stack.containers }
  )

const Container = props =>
  <div
    className={props.css.container}
    style={{ backgroundColor: props.color }}
  />

const Stack = props =>
  <div className={props.css.stack}>
    {props.containers.map(c => <Container css={props.css} color={c.color} />)}
  </div>

export default connect(mapStateToProps, store)(styleable(css)(Stack))
