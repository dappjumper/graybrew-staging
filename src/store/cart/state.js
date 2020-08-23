function localCart () {
  const cart = localStorage.getItem('cart_local') || []
  return (typeof cart === 'string' ? JSON.parse(cart) : cart)
}

export default function () {
  return {
    items: localCart()
  }
}
