import types from '../common/types'

export const TYPES = types('key', 'INIT')

export const init = _ => ({
  type: TYPES.INIT
})
