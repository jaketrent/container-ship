import wakt from 'wakt'

import css from './index.css'

export default _ =>
  wakt.createElement(
    'div',
    { className: css.app },
    'Container Ship vdom Style!'
  )
