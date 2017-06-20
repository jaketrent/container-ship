import types from '../common/types'

export const TYPES = types('key', 'INIT', 'RETRY', 'RESET')

export const init = count => ({
  type: TYPES.INIT,
  count
})

export const retry = count => ({
  type: TYPES.RETRY,
  count
})

export const reset = _ => ({
  type: TYPES.RESET
})
