import { connect } from 'wakt-seaducks'
import styleable from 'styleable'
import wakt from 'wakt'

import * as actions from './actions'
import Button from '../common/ui/button'
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

const RetryArrow = props =>
  <svg
    className={props.css.arrow}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
    enable-background="new 0 0 1000 1000"
  >
    <g>
      <path d="M984.7,66.1c-1.8-2-4-3.7-6.5-4.9c-7.5-3.6-16.2-2-22.5,3.6l-95.6,85.7C735.9,25.3,548.9-29.8,367.7,23.1C104.3,100-46.9,375.9,30,639.2c76.9,263.4,352.8,414.5,616.1,337.6C816.9,927,940.5,793.6,985.3,634.1c1.6-5.6,1.4-11.7,1.4-17.8c0-35.6-28.9-64.5-64.5-64.5c-28.7,0-53.4,18.6-61.8,44.6c-32,118-122.8,217-248.8,253.8c-192.5,56.2-394-54.3-450.3-246.8c-56.2-192.5,54.3-394,246.7-450.2c129.1-37.7,262.2-0.4,352.9,86.2l-98.2,88c-6.3,5.6-8.8,14.1-6,22c2.8,7.9,10.1,13.4,18.4,13.8l292.7,33.2c11.4,0.6,21.2-8.2,21.8-19.6L990,81.1C990.3,75.5,988.3,70.1,984.7,66.1z" />
    </g>
  </svg>

const Container = props =>
  <div
    className={props.css.container}
    style={{
      backgroundColor: props.isMatch ? 'green' : props.key.color
    }}
  />

const renderRetry = props =>
  true || props.isWin
    ? <Button
        css={{ button: props.css.retry }}
        ev-click={_ => props.retry(props.count)}
      >
        <RetryArrow {...props} />
      </Button>
    : null

const Key = props =>
  <div className={props.css.key}>
    {renderRetry(props)}
    {props.containers.map((c, i) => <Container key={i} {...props} {...c} />)}
  </div>

export default connect(mapStateToProps, mapDispatchToProps, store)(
  styleable(css)(Key)
)
