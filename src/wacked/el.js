import h from 'virtual-dom/h'

const formatClassName = (className = '') =>
  /^(\.|#)/.test(className) ? className : '.' + className.split(' ').join('.')

function wrap(elName) {
  return function wrapped() {
    const hasProps = !isChild(arguments[1])
    const tagName = elName + formatClassName(arguments[0])
    const props = hasProps ? arguments[1] : {}
    const children = [...arguments].slice(hasProps ? 2 : 1)

    return h(tagName, props, children)
  }
}

const isChild = x =>
  x &&
  (typeof x === 'string' ||
    Array.isArray(x) ||
    x.type === 'VirtualNode' ||
    x.type === 'VirtualText')

export const div = wrap('div')
