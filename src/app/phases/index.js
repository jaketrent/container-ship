import { connect } from 'wakt-seaducks'
import wakt from 'wakt'

import Play from './play'
import Start from './start'
import store from '../store'

const phase = state => {
  const phases = [
    { if: state => state.key.containers.length === 0, ui: <Start /> },
    {
      if: state =>
        state.key.containers.every(
          (kc, i) => (state.stack.containers[i] || {}).color === kc.color
        ),
      ui: <Play playState="win" />
    },
    {
      if: state => state.stack.containers.length >= state.key.containers.length,
      ui: <Play playState="loss" />
    },
    {
      if: _ => true,
      ui: <Play />
    }
  ]

  return phases.find(p => p.if(state)).ui
}

const mapStateToProps = state => ({
  Phase: phase(state)
})

const Phase = props => props.Phase

export default connect(mapStateToProps, null, store)(Phase)
