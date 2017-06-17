import types from '../common/types'

export const TYPES = types('key', 'INIT', 'RETRY')

export const init = _ => ({
  type: TYPES.INIT
})

export const retry = _ => ({
  type: TYPES.RETRY
})
