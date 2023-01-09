const contract = {
  status: {
    active: "ACTIVE",
    cancel: "CANCELED",
    pending: "PENDING",
    refund: "REFUND",
    terminated: "TERMINATED",
  },
  statusDescription: {
    active: "'Ativo' | Contrato está válido e com pagamento em dia.",
    cancel: "'CANCELADO' | Contrato foi cancelado.",
    refund:
      "'Recusado' | Não foi possível efetuar o pagamento do contrato ou o contrato foi cancelado.",
    pending: "'Em análise' | Pagamento esta sendo processado.",
    terminated: "'Encerrado' | A vigência do contrato expirou.",
  },
};
