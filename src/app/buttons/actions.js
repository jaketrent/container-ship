import types from '../common/types'

export const TYPES = types('buttons', 'ADD_CONTAINER')

export const addContainer = color => ({
  type: TYPES.ADD_CONTAINER,
  color
})
