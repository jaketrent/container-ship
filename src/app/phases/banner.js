import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import css from './banner.css'
import * as keyActions from '../key/actions'
import store from '../store'

const mapDispatchToProps = dispatch => ({
  reset() {
    console.log('reseting!!')
    dispatch(keyActions.reset())
  }
})

const Banner = props =>
  <div className={props.css.fullscreen}>
    <div className={props.css.banner} style={{ background: props.color }}>
      <div className={props.css.text}>{props.children}</div>
      <button className={props.css.button} onclick={props.reset}>
        Start over
      </button>
    </div>
  </div>

export default connect(null, mapDispatchToProps, store)(styleable(css)(Banner))
