const bases = [
  'name',
  'social',
  'phone',
  'transportMethod',
  'deliveryLocation',
  'deliveryRegion',
  'pickupLocation',
  'paymentMethod'
]

function loadLocals () {
  const returned = {}
  for (const i in bases) {
    returned[bases[i]] = localStorage.getItem('customer_' + bases[i]) || ''
  }
  console.log(returned)
  return returned
}

export default function () {
  return loadLocals()
}
