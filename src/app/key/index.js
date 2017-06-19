import { connect } from 'wakt-seaducks'
import styleable from 'styleable'
import wakt from 'wakt'

import * as actions from './actions'
import css from './index.css'
import store from '../store'

const mapStateToProps = state => {
  const containers = state.key.containers.map((kc, i) => ({
    key: kc,
    isMatch: (state.stack.containers[i] || {}).color === kc.color
  }))
  const isWin = containers.every(c => c.isMatch)
  const count = state.key.containers.length

  return { containers, isWin, count }
}

const mapDispatchToProps = dispatch => ({
  retry(count) {
    dispatch(actions.retry(count))
  }
})

const Container = props =>
  <div
    className={props.css.container}
    style={{
      backgroundColor: props.isMatch ? 'green' : props.key.color
    }}
  />

const renderRetry = props =>
  true || props.isWin
    ? <button
        className={props.css.retry}
        onclick={_ => props.retry(props.count)}
      >
        A
      </button>
    : null

const Key = props =>
  <div className={props.css.key}>
    {renderRetry(props)}
    {props.containers.map((c, i) => <Container key={i} {...props} {...c} />)}
  </div>

export default connect(mapStateToProps, mapDispatchToProps, store)(
  styleable(css)(Key)
)
