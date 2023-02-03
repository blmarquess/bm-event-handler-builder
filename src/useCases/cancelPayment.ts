export default function cancelPayment() {
  console.log('Canceling payment...')
  return {
    status: 'CANCELED',
    updateDescription: 'Contract has been canceled payment',
    payment: 'CANCELED',
    deleted: true
  }
}
