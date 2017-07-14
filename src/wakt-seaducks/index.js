export const connect = (
  mapStateToProps,
  mapDispatchToProps,
  store
) => vnode => props => {
  const stateProps = typeof mapStateToProps === 'function'
    ? mapStateToProps(store.getState(), props)
    : {}
  const actionProps = typeof mapDispatchToProps === 'function'
    ? mapDispatchToProps(store.dispatch, props)
    : {}
  const allProps = { ...props, ...actionProps, ...stateProps }
  return vnode(allProps)
}
