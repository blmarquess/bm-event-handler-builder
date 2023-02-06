export const responsesExpected = {
  PAYMENT_OVERDUE: {
    active: {
      actions: [
        {
          contract: {
            status: 'CANCELED',
            description: 'Contrato cancelado por falta de pagamento.'
          },
          actions: ['functCancelarContrato()']
        },
        {
          payment: 'se for assinatura, cancelar a assinatura'
        }
      ]
    },
    canceled: ['actions'],
    pending: ['actions'],
    refunded: ['actions'],
    terminated: ['actions']
  },
  PAYMENT_REFUNDED: {
    active: ['actions'],
    canceled: ['actions'],
    pending: ['actions'],
    refunded: ['actions'],
    terminated: ['actions']
  },
  PAYMENT_CHARGEBACK_REQUESTED: {
    active: ['actions'],
    canceled: ['actions'],
    pending: ['actions'],
    refunded: ['actions'],
    terminated: ['actions']
  },
  PAYMENT_CONFIRMED: {
    active: ['actions'],
    canceled: ['actions'],
    pending: ['actions'],
    refunded: ['actions'],
    terminated: ['actions']
  },
  _PAYMENT_CREATED: {
    _active: ['actions'],
    _canceled: ['actions'],
    _pending: ['actions'],
    _refunded: ['actions'],
    _terminated: ['actions']
  },
  _SUBSCRIPTION_CREATED: {
    _active: ['actions'],
    _canceled: ['actions'],
    _pending: ['actions'],
    _refunded: ['actions'],
    _terminated: ['actions']
  },
  SUBSCRIPTION_NOT_CREATED: {
    _active: ['actions'],
    _canceled: ['actions'],
    pending: ['actions'],
    _refunded: ['actions'],
    _terminated: ['actions']
  }
}
