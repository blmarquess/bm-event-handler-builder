export function refundPayment() {
  console.log('Refunding payment...')
  return {
    payment: 'REFUND',
    deleted: true
  }
}
