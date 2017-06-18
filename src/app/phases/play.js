import wakt from 'wakt'

import Buttons from '../buttons'
import Key from '../key'
import Loss from './loss'
import Stack from '../stack'
import Win from './win'

const renderPlayState = props =>
  ({
    win: <Win />,
    loss: <Loss />
  }[props.playState])

export default props =>
  <div>
    <Stack />
    <Buttons />
    <h1>Container Ship!</h1>
    <Key />
    {renderPlayState(props)}
  </div>
