export function getProducts (state, payload) {
  return state.catalog
}

export function getProduct (state) {
  return (id) => {
    return state.catalog[id]
  }
}
