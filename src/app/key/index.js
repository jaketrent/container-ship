import { connect } from 'wakt-seaducks'
import styleable from 'styleable'
import wakt from 'wakt'

import css from './index.css'
import store from '../store'

const mapStateToProps = state => ({
  keyContainers: state.key.containers
})

const Container = props =>
  <div
    className={props.css.container}
    style={{
      backgroundColor: props.color
    }}
  />

const Key = props =>
  <div className={props.css.key}>
    {props.keyContainers.map(c => <Container {...props} {...c} />)}
  </div>

export default connect(mapStateToProps, null, store)(styleable(css)(Key))
