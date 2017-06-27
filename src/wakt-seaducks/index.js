export const connect = (
  mapStateToProps,
  mapStateToDispatch,
  store
) => vnode => props => {
  const stateProps = typeof mapStateToProps === 'function'
    ? mapStateToProps(store.getState(), props)
    : {}
  const actionProps = typeof mapStateToDispatch === 'function'
    ? mapStateToDispatch(store.dispatch, props)
    : {}
  const allProps = { ...props, ...actionProps, ...stateProps }
  return vnode(allProps)
}
