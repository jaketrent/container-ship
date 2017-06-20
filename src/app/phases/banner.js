import { connect } from 'wakt-seaducks'
import wakt from 'wakt'
import styleable from 'styleable'

import Button from '../common/ui/button'
import css from './banner.css'
import * as keyActions from '../key/actions'
import store from '../store'

const mapDispatchToProps = dispatch => ({
  reset() {
    dispatch(keyActions.reset())
  }
})

const Banner = props =>
  <div className={props.css.fullscreen}>
    <div className={props.css.banner} style={{ background: props.color }}>
      <div className={props.css.text}>{props.children}</div>
      <Button onclick={props.reset}>
        Start over
      </Button>
    </div>
  </div>

export default connect(null, mapDispatchToProps, store)(styleable(css)(Banner))
