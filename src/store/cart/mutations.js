export function addItem (state, payload) {
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload.id) {
      state.items[i].quantity += payload.quantity
      return false
    }
  }
  state.items.push(payload)
}

export function replaceItem ({ state }, payload) {
  state.items[payload.index] = payload.data
}

export function removeItem (state, payload) {
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload) {
      state.items.splice(i, 1)
      return false
    }
  }
}

export function toggle (state, payload) {
  state.opened = !state.opened
}
