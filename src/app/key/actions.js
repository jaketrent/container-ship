import types from '../common/types'

export const TYPES = types('key', 'INIT', 'RETRY')

export const init = count => ({
  type: TYPES.INIT,
  count
})

export const retry = _ => ({
  type: TYPES.RETRY
})
