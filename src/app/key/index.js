import { connect } from 'wakt-seaducks'
import styleable from 'styleable'
import wakt from 'wakt'

import css from './index.css'
import store from '../store'

const mapStateToProps = state => ({
  containers: state.key.containers
    .map((kc, i) => ({
      key: kc,
      stack: state.stack.containers[i]
    }))
    .reverse()
})

const Container = props =>
  <div
    className={props.css.container}
    style={{
      backgroundColor: props.key.color
    }}
  />

const Key = props =>
  <div className={props.css.key}>
    {props.containers.map(c => <Container {...props} {...c} />)}
  </div>

export default connect(mapStateToProps, null, store)(styleable(css)(Key))
