function localCart () {
  const cart = localStorage.getItem('localCart') || []
  return (typeof cart === 'string' ? JSON.parse(cart) : cart)
}

export default function () {
  return {
    items: localCart(),
    opened: false
  }
}
