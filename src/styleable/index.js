export default function styleable(css) {
  return function decorate(vnode) {
    return function styledVnode(props) {
      return vnode({
        ...props,
        css: {
          ...css,
          ...(props || {}).css
        }
      })
    }
  }
}
