import wacked from 'wacked'

import css from './index.css'

export default _ =>
  wacked.createElement(
    'div',
    { className: css.app },
    'Container Ship vdom Style!'
  )
