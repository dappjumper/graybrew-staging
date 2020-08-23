export function getProducts ({ state }, payload) {
  return state.catalog
}

export function getProduct ({ state }, payload) {
  return state.catalog[payload.id || payload]
}
