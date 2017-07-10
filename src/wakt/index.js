import Delegator from 'dom-delegator'
import h from 'virtual-dom/h'
import svg from 'virtual-dom/virtual-hyperscript/svg'

import * as vdom from './vdom'

const formatClassName = className =>
  /^(\.|#)/.test(className || '')
    ? className || ''
    : '.' + (className || '').split(' ').join('.')

const isSvg = nodeName => ['svg', 'g', 'path'].includes(nodeName)

const isCustomElement = node => typeof node === 'function'

// TODO: transform react-style onClick to lowercase
function createElement(nodeName, props, ...children) {
  if (isCustomElement(nodeName)) {
    return nodeName.apply(this, [{ ...props, children }])
  } else if (isSvg(nodeName)) {
    if (props && props.className) props.class = props.className

    return svg(nodeName, props, children)
  } else {
    nodeName =
      nodeName +
      (props && props.className ? formatClassName(props.className) : '')
    return h(nodeName, props, children)
  }
}

const renders = {}
let evtDelegator = null

const isUpdate = el => !!renders[el]

function render(vnode, el) {
  if (isUpdate(el)) {
    const { currentVNode, rootNode } = renders[el]
    renders[el] = {
      currentVNode: vnode,
      rootNode: vdom.update(currentVNode, vnode, rootNode)
    }
  } else {
    evtDelegator = new Delegator()
    renders[el] = { currentVNode: vnode, rootNode: vdom.render(vnode, el) }
  }
}

export default { createElement, render }
