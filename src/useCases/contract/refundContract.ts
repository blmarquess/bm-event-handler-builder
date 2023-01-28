export function refundContract() {
  console.log('Activating contract...')
  return {
    status: 'REFUND',
    id: '1',
    paymentMethod: 'CREDIT_CARD',
    amount: 100,
    currency: 'BRL',
    description: 'Teste',
    items: [{}]
  }
}
