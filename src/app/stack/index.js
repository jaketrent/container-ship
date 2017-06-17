import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import css from './index.css'
import store from '../store'

const mapStateToProps = state => ({ containers: state.stack.containers })

const Container = props =>
  <div
    className={props.css.container}
    style={{
      backgroundColor: props.color,
      transform: `translateX(${props.offset}px)`
    }}
  />

const Stack = props =>
  <div className={props.css.stack}>
    {props.containers.map(c => <Container css={props.css} {...c} />)}
  </div>

export default connect(mapStateToProps, null, store)(styleable(css)(Stack))
