import wakt from 'wakt'

export default function styleable(css) {
  return function decorate(vnode) {
    if (wakt.isClass(vnode)) {
      return class Styleable extends wakt.Component {
        getCss() {
          return { ...css, ...this.props.css }
        }
        render() {
          // TODO: handle returning jsx
          return wakt.createElement(
            vnode,
            { ...this.props, css: this.getCss() },
            this.props.children
          )
        }
      }
    } else {
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
}
