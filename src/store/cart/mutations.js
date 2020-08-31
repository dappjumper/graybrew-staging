function saveLocalCart (state) {
  localStorage.setItem('localCart', JSON.stringify(state.items))
}

export function addItem (state, payload) {
  state.opened = true
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload.id) {
      state.items[i].quantity += payload.quantity
      saveLocalCart(state)
      return false
    }
  }
  state.items.push(payload)
  saveLocalCart(state)
}

export function changeQuantity (state, payload) {
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload.id) {
      if (state.items[i].quantity + payload.quantity <= 0) {
        state.items.splice(i, 1)
      } else {
        state.items[i].quantity += payload.quantity
      }
      saveLocalCart(state)
      return false
    }
  }
}

export function setQuantity (state, payload) {
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload.id) {
      if (payload.quantity <= 0) {
        state.items.splice(i, 1)
      } else {
        state.items[i].quantity = payload.quantity
      }
      saveLocalCart(state)
      if (!state.items.length) state.opened = false
      return false
    }
  }
}

export function removeItem (state, payload) {
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload) {
      state.items.splice(i, 1)
      saveLocalCart(state)
      if (!state.items.length) state.opened = false
      return false
    }
  }
}

export function toggle (state, payload) {
  state.opened = !state.opened
}
