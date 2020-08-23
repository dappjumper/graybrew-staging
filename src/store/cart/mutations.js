export function addToCart ({ state }, payload) {
  state.items.push(payload)
}

export function replaceItem ({ state }, payload) {
  state.items[payload.index] = payload.data
}

export function removeItem ({ state }, payload) {
  state.items.splice(payload, 1)
}
