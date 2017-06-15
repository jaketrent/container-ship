import createElement from 'virtual-dom/create-element'

import * as dom from './dom'

export function render(vnode, el) {
  dom.clear(el)

  const node = createElement(vnode)
  dom.render(node, el)
}
