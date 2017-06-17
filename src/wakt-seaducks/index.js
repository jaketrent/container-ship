export const connect = (mapStateToProps, store) => vnode => props => {
  const stateProps = typeof mapStateToProps === 'function'
    ? mapStateToProps(store.getState(), props)
    : {}
  const allProps = { ...props, ...stateProps }
  return vnode(allProps)
}
