export const int = (min = -8, max = 8) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const from = arr => arr[int(0, arr.length - 1)]
