import h from 'virtual-dom/h'

import * as vdom from './vdom'

const formatClassName = (className = '') =>
  /^(\.|#)/.test(className) ? className : '.' + className.split(' ').join('.')

function createElement(tagName, props, children) {
  tagName =
    tagName + (props && props.className ? formatClassName(props.className) : '')
  return h(tagName, props, children)
}

function render(vnode, el) {
  vdom.render(vnode, el)
}

export default { createElement, render }
