export function cancelPayment() {
  console.log('Canceling payment...')
  return {
    payment: 'CANCELED',
    deleted: true
  }
}
