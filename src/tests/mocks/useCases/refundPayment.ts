export default function refundPayment () {
  return {
    status: 'REFUND',
    updateDescription: 'Contract has been refound',
    payment: 'REFUND',
    deleted: true
  }
}
