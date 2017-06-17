import h from 'virtual-dom/h'

import * as vdom from './vdom'

const formatClassName = (className = '') =>
  /^(\.|#)/.test(className) ? className : '.' + className.split(' ').join('.')

// TODO: transform react-style onClick to lowercase
function createElement(nodeName, props, ...children) {
  if (typeof nodeName === 'function') {
    return nodeName.apply(this, [props, ...children])
  } else {
    nodeName =
      nodeName +
      (props && props.className ? formatClassName(props.className) : '')
    return h(nodeName, props, children)
  }
}

const renders = {}

function render(vnode, el) {
  if (renders[el]) {
    const { currentVNode, rootNode } = renders[el]
    renders[el] = {
      currentVNode: vnode,
      rootNode: vdom.update(currentVNode, vnode, rootNode)
    }
  } else {
    renders[el] = { currentVNode: vnode, rootNode: vdom.render(vnode, el) }
  }
}

export default { createElement, render }
