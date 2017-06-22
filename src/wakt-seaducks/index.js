import wakt from 'wakt'

export const connect = (
  mapStateToProps,
  mapStateToDispatch,
  store
) => vnode => {
  if (wakt.isClass(vnode)) {
    return class Connected extends wakt.Component {
      getConnected() {
        const stateProps = typeof mapStateToProps === 'function'
          ? mapStateToProps(store.getState(), this.props)
          : {}
        const actionProps = typeof mapStateToDispatch === 'function'
          ? mapStateToDispatch(store.dispatch, this.props)
          : {}
        return { ...this.props, ...actionProps, ...stateProps }
      }
      render() {
        // TODO: handle returning jsx
        return wakt.createElement(
          vnode,
          this.getConnected(),
          this.props.children
        )
      }
    }
  } else {
    return props => {
      const stateProps = typeof mapStateToProps === 'function'
        ? mapStateToProps(store.getState(), props)
        : {}
      const actionProps = typeof mapStateToDispatch === 'function'
        ? mapStateToDispatch(store.dispatch, props)
        : {}
      const allProps = { ...props, ...actionProps, ...stateProps }
      return vnode(allProps)
    }
  }
}
