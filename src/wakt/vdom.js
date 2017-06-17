import createElement from 'virtual-dom/create-element'
import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'

import * as dom from './dom'

export function render(vnode, el) {
  dom.clear(el)
  const rootNode = createElement(vnode)
  dom.render(rootNode, el)
  return rootNode
}

export function update(currentVNode, vnode, rootNode) {
  const patches = diff(currentVNode, vnode)
  const patchedRootNode = patch(rootNode, patches)
  return patchedRootNode
}
