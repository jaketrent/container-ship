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

const isClassStyleComponent = node => node.type === 'wakt.Component'

const renderClassStyleComponent = (Vnode, props, ...children) => {
  return new Vnode({ ...props, children }).render()
}

// TODO: transform react-style onClick to lowercase
function createElement(nodeName, props, ...children) {
  if (isCustomElement(nodeName)) {
    if (isClassStyleComponent(nodeName))
      return renderClassStyleComponent(nodeName, props, ...children)
    else return nodeName.apply(this, [{ ...props, children }])
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

function render(vnode, el) {
  if (renders[el]) {
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

class Component {
  constructor(props) {
    this.props = props
  }
  render() {}
}
Component.type = 'wakt.Component'

const isClass = vnode => vnode && vnode.type === 'wakt.Component'

export default { Component, createElement, isClass, render }
