import wakt from 'wakt'

import Buttons from '../buttons'
import Title from '../common/ui/title'
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
    <Title />
    <Key />
    {renderPlayState(props)}
  </div>
