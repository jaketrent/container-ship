export function clear(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

export function render(node, el) {
  el.appendChild(node)
}
