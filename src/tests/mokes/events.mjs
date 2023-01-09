const Events = {
  PAYMENT_OVERDUE: {
    event: "PAYMENT_OVERDUE",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
  PAYMENT_REFUNDED: {
    event: "PAYMENT_REFUNDED",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
  PAYMENT_CHARGEBACK_REQUESTED: {
    event: "PAYMENT_CHARGEBACK_REQUESTED",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
  PAYMENT_CONFIRMED: {
    event: "PAYMENT_CONFIRMED",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
  PAYMENT_CREATED: {
    event: "PAYMENT_CREATED",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
  SUBSCRIPTION_CREATED: {
    event: "SUBSCRIPTION_CREATED",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
  SUBSCRIPTION_NOT_CREATED: {
    event: "SUBSCRIPTION_NOT_CREATED",
    eventDescription: "DuPay *Seguro",
    referenceId: "63bb16e3f94f2b055b461564",
    chargeDueDate: "2023-01-08",
    subscriptionId: "",
    paymentId: "pay_2054421665692354",
    creditCard: {
      creditCardNumber: "6498",
      creditCardBrand: "MASTERCARD",
      creditCardToken: "341e6b20-34fd-4fbc-97e8-242db6df6d94",
    },
  },
};

module.exports = Events;
// SE O STATUS DO CONTRATO FOR PENDING:

// SUBSCRIPTION_NOT_CREATED - Atualizar o contrato para REFUSED
// PAYMENT_OVERDUE - Atualizar o contrato para REFUSED e solicitar cancelamento da assinatura
// PAYMENT_REFUNDED - Atualizar o contrato para REFUSED
// PAYMENT_CHARGEBACK_REQUESTED - Atualizar o contrato para REFUSED
// PAYMENT_CONFIRMED - Atualizar o contrato para ACTIVE e notificar a contratação para seguradora. Se a notificação na seguradora falhar, solicitar o cancelamento de assinatura, solicitar estorno do pagamento e atualizar o contrato para REFUSED.

// SE O STATUS DO CONTRATO FOR ACTIVE

// PAYMENT_OVERDUE - Atualizar o contrato para CANCELED, solicita o cancelamento da assinatura e notificar o cancelamento para a seguradora
// PAYMENT_REFUNDED - Atualizar o contrato para CANCELED, solicita o cancelamento da assinatura e notificar o cancelamento para a seguradora
// PAYMENT_CHARGEBACK_REQUESTED - Atualizar o contrato para CANCELED, solicita o cancelamento da assinatura e notificar o cancelamento para a seguradora
// PAYMENT_CONFIRMED - Atualizar o contrato para ACTIVE

// SE O STATUS DO CONTRATO FOR !== ACTIVE || PENDING

// PAYMENT_OVERDUE - Atualizar o contrato para CANCELED, solicita o cancelamento da assinatura e notificar o cancelamento para a seguradora
// PAYMENT_REFUNDED - Atualizar o contrato para CANCELED, solicita o cancelamento da assinatura e notificar o cancelamento para a seguradora
// PAYMENT_CHARGEBACK_REQUESTED - Atualizar o contrato para CANCELED, solicita o cancelamento da assinatura e notificar o cancelamento para a seguradora
// PAYMENT_CONFIRMED - Atualizar o contrato para CANCELED, cancelar assinatura, solicitar estorno do pagamento

// OBS: Toda vez que o contrato sofrer uma atualização referente ao pagamento, preencher o campo updateDescription com o seguinte padrão de mensagem:

// "Payment updated at new ${Date().toISOString()} with status: ${EVENT}"

// Também atualizar o campo updatedAt com a data da atualização no formato ISO(Date().toISOString())
