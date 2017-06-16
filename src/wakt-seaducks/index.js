const connect = mapStateToProps => vnode => props => {
  const stateProps = typeof mapStateToProps === 'function'
    ? mapStateToProps(store.getState(), props)
    : {}
  const allProps = { ...props, ...stateProps }
  return vnode(allProps)
}

export default { connect }
