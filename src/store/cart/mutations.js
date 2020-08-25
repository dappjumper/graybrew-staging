export function addItem (state, payload) {
  state.opened = true
  state.items.push(payload)
}

export function replaceItem ({ state }, payload) {
  state.items[payload.index] = payload.data
}

export function removeItem (state, payload) {
  state.items.splice(payload, 1)
}

export function toggle (state, payload) {
  state.opened = !state.opened
}
