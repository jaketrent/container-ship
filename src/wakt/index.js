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

let rootNode
let currentVNode

// TODO: consolidate to render, allowing for diff vnode/el components
function update(vnode) {
  let patchedRootNode = vdom.update(currentVNode, vnode, rootNode)
  rootNode = patchedRootNode
  currentVNode = vnode
}

function render(vnode, el) {
  currentVNode = vnode
  rootNode = vdom.render(vnode, el)
}

export default { createElement, render, update }
