const responsesExpected = {
  PAYMENT_OVERDUE: {
    active: {
      actions: [
        {
          contract: {
            status: "CANCELED",
            description: "Contrato cancelado por falta de pagamento.",
          },
          actions: ["functCancelarContrato()"],
        },
        {
          payment: "se for assinatura, cancelar a assinatura",
        },
      ],
    },
    canceled: { actions: [{ contract: {} }, { payment: {} }] },
    pending: { actions: [{ contract: {} }, { payment: {} }] },
    refunded: { actions: [{ contract: {} }, { payment: {} }] },
    terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
  PAYMENT_REFUNDED: {
    active: { actions: [{ contract: {} }, { payment: {} }] },
    canceled: { actions: [{ contract: {} }, { payment: {} }] },
    pending: { actions: [{ contract: {} }, { payment: {} }] },
    refunded: { actions: [{ contract: {} }, { payment: {} }] },
    terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
  PAYMENT_CHARGEBACK_REQUESTED: {
    active: { actions: [{ contract: {} }, { payment: {} }] },
    canceled: { actions: [{ contract: {} }, { payment: {} }] },
    pending: { actions: [{ contract: {} }, { payment: {} }] },
    refunded: { actions: [{ contract: {} }, { payment: {} }] },
    terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
  PAYMENT_CONFIRMED: {
    active: { actions: [{ contract: {} }, { payment: {} }] },
    canceled: { actions: [{ contract: {} }, { payment: {} }] },
    pending: { actions: [{ contract: {} }, { payment: {} }] },
    refunded: { actions: [{ contract: {} }, { payment: {} }] },
    terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
  _PAYMENT_CREATED: {
    _active: { actions: [{ contract: {} }, { payment: {} }] },
    _canceled: { actions: [{ contract: {} }, { payment: {} }] },
    _pending: { actions: [{ contract: {} }, { payment: {} }] },
    _refunded: { actions: [{ contract: {} }, { payment: {} }] },
    _terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
  _SUBSCRIPTION_CREATED: {
    _active: { actions: [{ contract: {} }, { payment: {} }] },
    _canceled: { actions: [{ contract: {} }, { payment: {} }] },
    _pending: { actions: [{ contract: {} }, { payment: {} }] },
    _refunded: { actions: [{ contract: {} }, { payment: {} }] },
    _terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
  SUBSCRIPTION_NOT_CREATED: {
    _active: { actions: [{ contract: {} }, { payment: {} }] },
    _canceled: { actions: [{ contract: {} }, { payment: {} }] },
    pending: { actions: [{ contract: {} }, { payment: {} }] },
    _refunded: { actions: [{ contract: {} }, { payment: {} }] },
    _terminated: { actions: [{ contract: {} }, { payment: {} }] },
  },
};

module.exports = responsesExpected;
